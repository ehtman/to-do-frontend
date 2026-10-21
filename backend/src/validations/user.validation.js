
import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .max(100, "Name cannot exceed 100 characters")
    .optional(),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .transform((value) => value.toLowerCase()),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(72, "Password is too long"),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .transform((value) => value.toLowerCase()),

  password: z
    .string()
    .min(1, "Password is required")
    .max(72, "Password is too long"),
});
