import { z } from "zod";

// Schema for creating a new task
const createTaskSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .trim()
    .min(1, "Title cannot be empty"),
  
  completed: z.boolean().optional(),
});

// Schema for updating a task (all fields optional)
const updateTaskSchema = createTaskSchema.partial();

// Schema for validating MongoDB ID in params (Add this!)
const taskIdSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid task ID"),
});

export { createTaskSchema, updateTaskSchema, taskIdSchema };