import express from "express";
import { getPaginatedComputers } from "../controllers/computerController.js";

const router = express.Router();
router.use(express.json());

router.get("/getPaginatedComputers" , getPaginatedComputers);
router.get("/getComputer/:id" , );
router.post("/insertComputer" , );
router.delete("/deleteComputer/:id" , );
router.patch("/updateComputer/:id" , );

export default router;