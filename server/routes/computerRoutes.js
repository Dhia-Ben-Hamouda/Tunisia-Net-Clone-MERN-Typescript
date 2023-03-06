import express from "express";
import { getPaginatedComputers , insertComputer } from "../controllers/computerController.js";
import { deleteComputer , updateComputer } from "../controllers/computerController.js";
import { getComputer } from "../controllers/computerController.js";

const router = express.Router();
router.use(express.json());

router.get("/getPaginatedComputers" , getPaginatedComputers);
router.get("/getComputer/:id" , getComputer);
router.post("/insertComputer" , insertComputer);
router.delete("/deleteComputer/:id" , deleteComputer);
router.patch("/updateComputer/:id" , updateComputer);

export default router;