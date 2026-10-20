
import Task from "../models/task.model.js";

// POST: Create a new task
export const createTask = async (req, res) => {
    try {
        const { title, completed } = req.body;

        if (!title || !title.trim()) {
            return res.status(400).json({
                message: "Task title is required"
            });
        }

        const task = await Task.create({
            title: title.trim(),
            completed: completed ?? false
        });

        return res.status(201).json({
            message: "Task created successfully",
            task
        });
    } catch (error) {
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
        const { id } = req.params;

        if (!/^[0-9a-fA-F]{24}$/.test(id)) {
            return res.status(400).json({
                message: "Invalid task ID"
            });
        }

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
        return res.status(500).json({
            message: "Failed to delete task",
            error: error.message
        });
    }
};
