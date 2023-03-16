import Computer from "../models/Computer.js";

export async function getPaginatedComputers(req, res) {
    try {
        let { page, brand, procesor, graphicsCard, memory, storage, price } = JSON.parse(req.query.params);

        if (brand.length === 0) {
            brand = ["HP", "Asus", "Dell"]
        }

        if (procesor.length === 0) {
            procesor = ["AMDRyzen5", "AMDRyzen7", "IntelCorei5", "IntelCorei7"]
        }

        if (memory.length === 0) {
            memory = ["8gb", "16gb", "24gb", "32gb"]
        }

        if (storage.length === 0) {
            storage = ["1TB256GBSSD", "1TBSSD", "512GBSSD"]
        }

        if (graphicsCard.length === 0) {
            graphicsCard = ["GTX1650", "RTX3050", "RTX3050ti"]
        }

        const limit = 5;
        const skip = (limit * (page - 1));
        const count = await Computer.countDocuments({
            brand: { $in: brand },
            procesor: { $in: procesor },
            graphicsCard: { $in: graphicsCard },
            memory: { $in: memory },
            storage: { $in: storage }
        }).where("price").lte(price[1]).gte(price[0]);

        const numberOfPages = Math.ceil(count / limit);
        const computers = await Computer.find({
            brand: { $in: brand },
            procesor: { $in: procesor },
            graphicsCard: { $in: graphicsCard },
            memory: { $in: memory },
            storage: { $in: storage }
        }).where("price").lte(price[1]).gte(price[0]).skip(skip).limit(limit).sort({ price:1 , rating: -1 });

        return res.status(200).json({
            computers,
            numberOfPages,
        })

    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching computers"
        })
    }
}

export async function getAllComputers(req, res) {
    try {
        const computers = await Computer.find();
        return res.status(200).json(computers);
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching computers"
        })
    }
}

export async function getComputer(req, res) {
    try {
        const { id } = req.params;

        const computer = await Computer.findById(id);
        return res.status(200).json(computer);
    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching computer"
        })
    }
}

export async function insertComputer(req, res) {
    try {
        await Computer.create(req.body);

        return res.status(201).json({
            msg: "computer has been inserted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while inserting computer"
        })
    }
}

export async function deleteComputer(req, res) {
    try {
        const { id } = req.params;
        await Computer.findByIdAndDelete(id);

        return res.status(201).json({
            msg: "computer has been deleted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while deleting computer"
        })
    }
}

export async function updateComputer(req, res) {
    try {
        const { id } = req.params;
        await Computer.findByIdAndUpdate(id, req.body);

        return res.status(201).json({
            msg: "computer has been updated successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while updating computer"
        })
    }
}