
import express from "express";

import {
    createTask,
    getTasks,
    deleteTask
} from "../controllers/task.controller.js";

const router = express.Router();

// GET /todo
router.get("/", getTasks);

// POST /todo
router.post("/", createTask);

// DELETE /todo/:id
router.delete("/:id", deleteTask);

export default router;
