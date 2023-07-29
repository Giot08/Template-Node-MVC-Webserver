import express from "express";
import { loginForm, registerForm, resetPassword } from "../controllers/auth.controllers.js";

const authRoutes = express.Router();

authRoutes.get("/login", loginForm)
authRoutes.get("/register", registerForm)
authRoutes.get("/reset_password", resetPassword)

export default authRoutes