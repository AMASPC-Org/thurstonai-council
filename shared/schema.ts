import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  organization: text("organization"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  emailVerified: timestamp("email_verified"),
  accountStatus: text("account_status").notNull().default("active"), // active, suspended, deleted
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  password: true,
  firstName: true,
  lastName: true,
  organization: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Summit Registration Schema
export const registrations = pgTable("registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id), // Optional link to user account
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  organization: text("organization").notNull(),
  title: text("title").notNull(),
  sector: text("sector").notNull(),
  registeredAt: timestamp("registered_at").notNull().defaultNow(),
  paymentStatus: text("payment_status").notNull().default("pending"), // pending, paid, scholarship
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  stripeSessionId: text("stripe_session_id"),
  paidAt: timestamp("paid_at"),
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  registeredAt: true,
  paidAt: true,
  stripePaymentIntentId: true,
  stripeSessionId: true,
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;
