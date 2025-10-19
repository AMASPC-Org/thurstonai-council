import { Link, useLocation } from 'wouter';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import type { User as UserType } from '@shared/schema';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About the Council', href: '/about' },
  { label: 'The Inaugural Summit', href: '/summit' },
  { label: 'Get Involved', href: '/get-involved' },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Check if user is logged in (this will fail silently if not authenticated)
  const { data: user } = useQuery<UserType>({
    queryKey: ["/api/auth/me"],
    retry: false,
  });

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location === item.href ? 'text-primary' : 'text-foreground'
                }`}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Authentication Links */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l">
              {user ? (
                <Link href="/profile">
                  <Button variant="ghost" size="sm" data-testid="button-profile">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/signin">
                    <Button variant="ghost" size="sm" data-testid="button-signin">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button variant="default" size="sm" data-testid="button-signup">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:bg-accent ${
                    location === item.href ? 'text-primary bg-accent' : 'text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Authentication Links */}
              <div className="border-t pt-2 mt-2">
                {user ? (
                  <Link
                    href="/profile"
                    className="block px-3 py-2 text-base font-medium transition-colors hover:bg-accent text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="link-mobile-profile"
                  >
                    <User className="inline-block h-4 w-4 mr-2" />
                    Profile
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="block px-3 py-2 text-base font-medium transition-colors hover:bg-accent text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-signin"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-3 py-2 text-base font-medium transition-colors hover:bg-accent text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-signup"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}