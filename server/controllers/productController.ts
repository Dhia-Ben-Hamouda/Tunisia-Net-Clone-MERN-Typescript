import Computer from "../models/Computer";
import Keyboard from "../models/Keyboard";
import Screen from "../models/Screen";
import Mouse from "../models/Mouse";
import { Request, Response } from "express";

export async function getProduct(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const computers = await Computer.find({ _id: id });
        const screens = await Screen.find({ _id: id });
        const keyboards = await Keyboard.find({ _id: id });
        const mouses = await Mouse.find({ _id: id });

        res.status(200).json(
            ...computers, ...screens, ...keyboards, ...mouses
        )
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching product"
        })
    }
}