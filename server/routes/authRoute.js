import express from "express";
const router = express.Router();
import { signIn, signup } from "../controllers/authController.js";
import restrict from "../middleware/isAdmin.js"


// router.post("/signup", restrict("admin"),signup);
router.post("/signup",signup);
router.post("/signin" , signIn)
export default router