import Screen from "../models/Screen.js";

export async function getPaginatedScreens(req, res) {
    try {
        let { page, brand, size, price, resolution } = JSON.parse(req.query.params);

        if (brand.length === 0) {
            brand = ["HP", "Asus", "Dell", "Redragon"]
        }

        if (size.length === 0) {
            size = ["21", "24", "27", "32"]
        }

        if (resolution.length === 0) {
            resolution = ["HD", "FullHD", "QHD", "4K"];
        }

        const limit = 5;
        const skip = (limit * (page - 1));
        const count = await Screen.countDocuments({
            brand: { $in: brand },
            size: { $in: size },
            resolution: { $in: resolution }
        }).where("price").lte(price[1]).gte(price[0]);

        const numberOfPages = Math.ceil(count / limit);
        let screens = await Screen.find({
            brand: { $in: brand },
            size: { $in: size },
            resolution: { $in: resolution }
        }).where("price").lte(price[1]).gte(price[0]).skip(skip).limit(limit).sort({ price: 1, rating: -1 });

        if (!screens.length && page === 2) {
            screens = await Screen.find({
                brand: { $in: brand },
                size: { $in: size },
                resolution: { $in: resolution }
            }).where("price").lte(price[1]).gte(price[0]).limit(limit).sort({ price: 1, rating: -1 });
        }

        return res.status(200).json({
            screens,
            numberOfPages,
        })

    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching screens"
        })
    }
}

export async function getAllScreens(req, res) {
    try {
        const screens = await Screen.find();
        return res.status(200).json(screens);
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching screens"
        })
    }
}

export async function getScreen(req, res) {
    try {
        const { id } = req.params;

        const screen = await Screen.findById(id);
        return res.status(200).json(screen);
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching screen"
        })
    }
}

export async function insertScreen(req, res) {
    try {
        const { name, description, price, pictures, brand, size, resolution } = req.body;
        await Screen.create({ name, description, price, pictures, brand, size, resolution });

        return res.status(201).json({
            msg: "screen has been inserted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while inserting Screen"
        })
    }
}

export async function deleteScreen(req, res) {
    try {
        const { id } = req.params;
        await Screen.findByIdAndDelete(id);

        return res.status(201).json({
            msg: "screen has been deleted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while deleting Screen"
        })
    }
}

export async function updateScreen(req, res) {
    try {
        const { name, description, price, pictures, brand, size, resolution } = req.body;
        const { id } = req.params;

        await Screen.findByIdAndUpdate(id, { name, description, price, pictures, brand, size, resolution });

        return res.status(201).json({
            msg: "screen has been updated successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while updating Screen"
        })
    }
}