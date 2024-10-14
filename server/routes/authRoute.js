import express from "express";
const router = express.Router();
import { signIn, signup } from "../controllers/authController.js";
import restrict from "../middleware/isAdmin.js";
import { auth } from "../middleware/auth.js";



router.post("/signup",auth, restrict("admin"),signup);
// router.post("/signup",signup);
router.post("/signin" , signIn)
export default router