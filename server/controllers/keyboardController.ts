import Keyboard from "../models/Keyboard";
import { Request , Response } from "express";

export async function getPaginatedKeyboards(req: Request, res: Response) {
    try {
        let { page, brand, mechanical, wireless, price } = JSON.parse(req.query.params as string);

        if (brand.length === 0) {
            brand = ["HP", "Asus", "Dell", "Redragon"]
        }

        if (mechanical.length === 0) {
            mechanical = ["yes", "no"]
        }

        if (wireless.length === 0) {
            wireless = ["yes", "no"]
        }

        const limit = 5;
        const skip = (limit * (page - 1));
        const count = await Keyboard.countDocuments({
            brand: { $in: brand },
            mechanical: { $in: mechanical },
            wireless: { $in: wireless }
        }).where("price").lte(price[1]).gte(price[0]);

        const numberOfPages = Math.ceil(count / limit);
        let keyboards = await Keyboard.find({
            brand: { $in: brand },
            mechanical: { $in: mechanical },
            wireless: { $in: wireless }
        }).where("price").lte(price[1]).gte(price[0]).skip(skip).limit(limit).sort({ price: 1, rating: -1 });

        if (!keyboards.length && page === 2) {
            keyboards = await Keyboard.find({
                brand: { $in: brand },
                mechanical: { $in: mechanical },
                wireless: { $in: wireless }
            }).where("price").lte(price[1]).gte(price[0]).limit(limit).sort({ price: 1, rating: -1 });
        }

        return res.status(200).json({
            keyboards,
            numberOfPages,
        })

    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching keyboards"
        })
    }
}

export async function getAllkeyboards(req: Request, res: Response) {
    try {
        const keyboards = await Keyboard.find();
        return res.status(200).json(keyboards);
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching keyboards"
        })
    }
}

export async function getkeyboard(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const keyboard = await Keyboard.findById(id);
        return res.status(200).json(keyboard);
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching keyboard"
        })
    }
}

export async function insertkeyboard(req: Request, res: Response) {
    try {
        const { name, description, price, pictures, brand, mechanical, wireless } = req.body;
        await Keyboard.create({ name, description, price, pictures, brand, mechanical, wireless });

        return res.status(201).json({
            msg: "keyboard has been inserted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while inserting keyboard"
        })
    }
}

export async function deletekeyboard(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Keyboard.findByIdAndDelete(id);

        return res.status(201).json({
            msg: "keyboard has been deleted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while deleting keyboard"
        })
    }
}

export async function updatekeyboard(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Keyboard.findByIdAndUpdate(id, req.body);

        return res.status(201).json({
            msg: "keyboard has been updated successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while updating keyboard"
        })
    }
}