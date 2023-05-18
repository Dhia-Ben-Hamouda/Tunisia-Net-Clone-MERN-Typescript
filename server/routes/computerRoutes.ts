import express from "express";
import { getAllComputers, getPaginatedComputers , insertComputer } from "../controllers/computerController";
import { deleteComputer , updateComputer } from "../controllers/computerController";
import { getComputer } from "../controllers/computerController";

const router = express.Router();
router.use(express.json());

router.get("/getPaginatedComputers" , getPaginatedComputers);
router.get("/getAllComputers" , getAllComputers);
router.get("/getComputer/:id" , getComputer);
router.post("/insertComputer" , insertComputer);
router.delete("/deleteComputer/:id" , deleteComputer);
router.patch("/updateComputer/:id" , updateComputer);

export default router;