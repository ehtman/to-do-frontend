import Task from "../models/task.model.js";
import { createTaskSchema, taskIdSchema } from "../validations/task.validation.js";

// POST: Create a new task
export const createTask = async (req, res) => {
    try {
        // .parse() validates the body and throws an error if invalid
        const { title, completed } = createTaskSchema.parse(req.body);

        const task = await Task.create({
            title,
            completed: completed ?? false
        });

        return res.status(201).json({
            message: "Task created successfully",
            task
        });
    } catch (error) {
        // If Zod throws an error, return 400 with details
        if (error.errors) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.errors
            });
        }

        return res.status(500).json({
            message: "Failed to create task",
            error: error.message
        });
    }
};

// GET: Fetch all tasks
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Tasks fetched successfully",
            tasks
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch tasks",
            error: error.message
        });
    }
};

// DELETE: Delete a task by its MongoDB ID
export const deleteTask = async (req, res) => {
    try {
        // .parse() validates req.params instead of manual regex matching
        const { id } = taskIdSchema.parse(req.params);

        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json({
            message: "Task deleted successfully",
            task
        });
    } catch (error) {
        // If Zod validation for ID fails, return 400
        if (error.errors) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.errors
            });
        }

        return res.status(500).json({
            message: "Failed to delete task",
            error: error.message
        });
    }
};