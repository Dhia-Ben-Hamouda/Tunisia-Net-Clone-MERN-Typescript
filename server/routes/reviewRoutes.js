import express from "express";
import { insertReview } from "../controllers/reviewController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/insertReview" , authMiddleware , insertReview);

export default router;