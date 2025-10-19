import { type User, type InsertUser, type Registration, type InsertRegistration } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Registration methods
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getRegistrationByEmail(email: string): Promise<Registration | undefined>;
  getRegistrationById(id: string): Promise<Registration | undefined>;
  getAllRegistrations(): Promise<Registration[]>;
  getRegistrationCount(): Promise<number>;
  updateRegistrationPayment(id: string, paymentData: {
    paymentStatus: string;
    stripeSessionId?: string;
    stripePaymentIntentId?: string;
    paidAt?: Date;
  }): Promise<Registration | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private registrations: Map<string, Registration>;

  constructor() {
    this.users = new Map();
    this.registrations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = { 
      ...insertRegistration, 
      id,
      registeredAt: new Date(),
      paymentStatus: insertRegistration.paymentStatus || "pending",
      stripePaymentIntentId: null,
      stripeSessionId: null,
      paidAt: null
    };
    this.registrations.set(id, registration);
    return registration;
  }

  async getRegistrationByEmail(email: string): Promise<Registration | undefined> {
    return Array.from(this.registrations.values()).find(
      (reg) => reg.email === email
    );
  }

  async getRegistrationById(id: string): Promise<Registration | undefined> {
    return this.registrations.get(id);
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values()).sort(
      (a, b) => b.registeredAt.getTime() - a.registeredAt.getTime()
    );
  }

  async getRegistrationCount(): Promise<number> {
    return this.registrations.size;
  }

  async updateRegistrationPayment(id: string, paymentData: {
    paymentStatus: string;
    stripeSessionId?: string;
    stripePaymentIntentId?: string;
    paidAt?: Date;
  }): Promise<Registration | undefined> {
    const registration = this.registrations.get(id);
    if (!registration) return undefined;
    
    const updated = {
      ...registration,
      paymentStatus: paymentData.paymentStatus,
      stripeSessionId: paymentData.stripeSessionId || registration.stripeSessionId,
      stripePaymentIntentId: paymentData.stripePaymentIntentId || registration.stripePaymentIntentId,
      paidAt: paymentData.paidAt || registration.paidAt
    };
    
    this.registrations.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
