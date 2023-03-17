import express from "express";
import { deletekeyboard, getAllkeyboards, getkeyboard } from "../controllers/keyboardController.js";
import { getPaginatedKeyboards, insertkeyboard, updatekeyboard } from "../controllers/keyboardController.js";

const router = express.Router();
router.use(express.json());

router.get("/getPaginatedKeyboards" , getPaginatedKeyboards);
router.get("/getAllKeyboards" , getAllkeyboards);
router.get("/getKeyboard/:id" , getkeyboard);
router.post("/insertKeyboard" , insertkeyboard);
router.delete("/deleteKeyboard/:id" , deletekeyboard);
router.patch("/updateKeyboard/:id" , updatekeyboard);

export default router;