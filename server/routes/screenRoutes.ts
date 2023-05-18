import express from "express";
import { deleteScreen, getAllScreens, getPaginatedScreens } from "../controllers/screenController.js";
import { getScreen, insertScreen, updateScreen } from "../controllers/screenController.js";

const router = express.Router();
router.use(express.json());

router.get("/getPaginatedScreens", getPaginatedScreens);
router.get("/getAllScreens", getAllScreens);
router.get("/getScreen/:id", getScreen);
router.post("/insertScreen", insertScreen);
router.delete("/deleteScreen/:id", deleteScreen);
router.patch("/updateScreen/:id", updateScreen);

export default router;