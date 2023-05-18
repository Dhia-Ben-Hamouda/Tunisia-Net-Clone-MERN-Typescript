import Mouse from "../models/Mouse";
import { Request , Response } from "express";

export async function getPaginatedMouses(req: Request, res:Response) {
    try {
        let { page, brand, wireless, price } = JSON.parse(req.query.params as string);

        if (brand.length === 0) {
            brand = ["HP", "Asus", "Dell", "Redragon"]
        }

        if (wireless.length === 0) {
            wireless = ["yes", "no"]
        }

        const limit = 5;
        const skip = (limit * (page - 1));
        const count = await Mouse.countDocuments({
            brand: { $in: brand },
            wireless: { $in: wireless }
        }).where("price").lte(price[1]).gte(price[0]);

        const numberOfPages = Math.ceil(count / limit);
        let mouses = await Mouse.find({
            brand: { $in: brand },
            wireless: { $in: wireless }
        }).where("price").lte(price[1]).gte(price[0]).skip(skip).limit(limit).sort({ price: 1, rating: -1 });

        if(!mouses.length && page === 2){
            mouses = await Mouse.find({
                brand: { $in: brand },
                wireless: { $in: wireless }
            }).where("price").lte(price[1]).gte(price[0]).limit(limit).sort({ price: 1, rating: -1 });
        }

        return res.status(200).json({
            mouses,
            numberOfPages,
        })

    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching mouses"
        })
    }
}

export async function getAllMouses(req: Request, res: Response) {
    try {
        const mouses = await Mouse.find();
        return res.status(200).json(mouses);
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching mouses"
        })
    }
}

export async function getMouse(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const mouse = await Mouse.findById(id);
        return res.status(200).json(mouse);
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching mouse"
        })
    }
}

export async function insertMouse(req: Request, res: Response) {
    try {
        const { name, description, price, pictures, brand, wireless } = req.body;
        await Mouse.create({ name, description, price, pictures, brand, wireless });

        return res.status(201).json({
            msg: "mouse has been inserted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while inserting mouse"
        })
    }
}

export async function deleteMouse(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Mouse.findByIdAndDelete(id);

        return res.status(201).json({
            msg: "mouse has been deleted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while deleting mouse"
        })
    }
}

export async function updateMouse(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Mouse.findByIdAndUpdate(id, req.body);

        return res.status(201).json({
            msg: "mouse has been updated successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while updating mouse"
        })
    }
}