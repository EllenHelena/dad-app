import express, { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/taskController";

const router: Router = express.Router();

// GET all scheduled tasks
router.get("/", getTasks);

// GET single scheduled task
router.get("/:id", getTask);

// POST new task on schedule //call createTaskfunction
router.post("/", createTask);

// DELETE task on schedule
router.delete("/:id", deleteTask);

// UPDATE task on chedule
router.put("/:id", updateTask);

export default router;
