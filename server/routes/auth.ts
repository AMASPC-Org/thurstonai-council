import { Router } from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import { storage } from "../storage";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";

const router = Router();

// Configure Passport Local Strategy
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await storage.getUserByEmail(email);
      
      if (!user) {
        return done(null, false, { message: 'Invalid email or password' });
      }
      
      const isValidPassword = await bcrypt.compare(password, user.password);
      
      if (!isValidPassword) {
        return done(null, false, { message: 'Invalid email or password' });
      }
      
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Configure Google OAuth Strategy
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists
        const email = profile.emails?.[0]?.value;
        if (!email) {
          return done(null, false, { message: 'No email found in Google profile' });
        }
        
        let user = await storage.getUserByEmail(email);
        
        if (!user) {
          // Create new user from Google profile
          user = await storage.createUser({
            email,
            password: await bcrypt.hash(Math.random().toString(36), 10), // Random password for OAuth users
            firstName: profile.name?.givenName || '',
            lastName: profile.name?.familyName || '',
            emailVerified: new Date() // Google accounts are verified
          });
        }
        
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  ));
}

// Passport serialization
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await storage.getUserById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Sign up endpoint
router.post("/api/auth/signup", async (req, res) => {
  try {
    const { email, password, firstName, lastName, organization } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    
    if (password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters long" });
    }
    
    // Check if user already exists
    const existingUser = await storage.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await storage.createUser({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      organization
    });
    
    // Create session
    req.session.user = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    };
    
    // Send success response
    res.status(201).json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        organization: user.organization
      }
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Failed to create account" });
  }
});

// Sign in endpoint
router.post("/api/auth/signin", async (req, res, next) => {
  passport.authenticate('local', (err: any, user: any, info: any) => {
    if (err) {
      return res.status(500).json({ error: "Authentication failed" });
    }
    
    if (!user) {
      return res.status(401).json({ error: info?.message || "Invalid credentials" });
    }
    
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to create session" });
      }
      
      // Create session
      req.session.user = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      };
      
      res.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          organization: user.organization
        }
      });
    });
  })(req, res, next);
});

// Sign out endpoint
router.post("/api/auth/signout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  });
});

// Get current user endpoint
router.get("/api/auth/me", (req, res) => {
  if (req.session?.user) {
    res.json({
      user: req.session.user
    });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

// Google OAuth routes
router.get("/api/auth/google",
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get("/api/auth/google/callback",
  passport.authenticate('google', { failureRedirect: '/signin' }),
  (req, res) => {
    // Successful authentication
    res.redirect('/profile');
  }
);

export default router;