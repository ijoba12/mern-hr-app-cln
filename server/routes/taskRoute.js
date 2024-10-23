import express from "express";
import { createTask, deleteTask, editTask, getAllTasks } from "../controllers/taskController.js"; // Adjust the path as necessary
import { auth } from "../middleware/auth.js";
import restrict from "../middleware/isAdmin.js";

const router = express.Router();

router.post("/tasks",auth,restrict("admin", "super-admin"), createTask); // Route for creating a task
// Route to get all tasks
router.get('/',auth,restrict("admin", "super-admin"), getAllTasks);

// Route to delete a task by ID
router.delete('/:id',auth,restrict("admin", "super-admin"), deleteTask);

// Route to edit a task by ID
router.patch('/:id',auth,restrict("admin", "super-admin"), editTask);

export default router;
