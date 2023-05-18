import express from "express";
import { insertReview } from "../controllers/reviewController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.post("/insertReview" , authMiddleware , insertReview);

export default router;