import express from "express";
import { getProduct, searchProducts } from "../controllers/productController";

const router = express();
router.use(express.json());

router.get("/getProduct/:id" , getProduct );
router.get("/searchProducts" , searchProducts );

export default router;