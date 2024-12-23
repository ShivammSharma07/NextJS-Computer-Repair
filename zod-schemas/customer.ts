import { createSelectSchema, createInsertSchema } from "drizzle-zod";
import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First name is required"),
  lastName: (schema) => schema.min(1, "Last name is required"),
  address1: (schema) => schema.min(1, "Address is required"),
  city: (schema) => schema.min(1, "City is required"),
  state: (schema) => schema.length(2, "State must be 2 characters"),
  email: (schema) => schema.email("Email is invalid"),
  zip: (schema) => schema.regex(/^\d{5}$/, "Zip code is invalid"),
  phone: (schema) => schema.regex(/^\d{10}$/, "Phone number is invalid"),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;

export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
