import express from "express";

const router = express.Router();
router.use(express.json());

router.get("/getPaginatedKeyboards" , );
router.get("/getAllKeyboards" , );
router.get("/getKeyboard/:id" , );
router.post("/insertKeyboard" , );
router.delete("/deleteKeyboard/:id" , );
router.patch("/updateKeyboard/:id" , );

export default router;