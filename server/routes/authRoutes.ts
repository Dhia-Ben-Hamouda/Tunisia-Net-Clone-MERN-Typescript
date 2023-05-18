import express from "express";
import { forgetPassword, resetPassword, signIn, signUp } from "../controllers/authController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();
router.use(express.json());

router.post("/signIn", signIn);
router.post("/signUp", upload.single("picture") , signUp);
router.post("/forgetPassword", forgetPassword);
router.patch("/resetPassword/:id", resetPassword);

export default router;