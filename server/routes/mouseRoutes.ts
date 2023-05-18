import express from "express";
import { deleteMouse, getAllMouses, getMouse } from "../controllers/mouseController";
import { getPaginatedMouses, insertMouse, updateMouse } from "../controllers/mouseController";

const router = express.Router();
router.use(express.json());

router.get("/getPaginatedMouses" , getPaginatedMouses);
router.get("/getAllMouses" , getAllMouses);
router.get("/getMouse/:id" , getMouse);
router.post("/insertMouse" , insertMouse);
router.delete("/deleteMouse/:id" , deleteMouse);
router.patch("/updateMouse/:id" , updateMouse);

export default router;