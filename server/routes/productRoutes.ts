import express from "express";
import { getProduct } from "../controllers/productController";

const router = express();
router.use(express.json());

router.get("/getProduct/:id" , getProduct );

export default router;