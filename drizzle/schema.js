import { boolean } from "drizzle-orm/gel-core";
import { pgTable, serial, text,varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
export const contact = pgTable("contact", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }),
  email: varchar("email", { length: 100 }),
  message: text("message"),
  contacted: boolean("contacted").default(false), 
  created_at: timestamp("created_at").defaultNow(),
});