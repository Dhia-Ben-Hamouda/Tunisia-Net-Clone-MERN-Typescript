import Computer from "../models/Computer.js";

export async function getPaginatedComputers(req, res) {
    try {
        const { page, brand, procesor, graphicsCard, memory, storage, price } = JSON.parse(req.query.params);

        const limit = 6;
        const skip = (limit * (page - 1));
        const count = await Computer.countDocuments({ brand, procesor, graphicsCard, memory, storage }).where("price").lte(price[1]).gte(price[0]).skip(skip).limit(limit).sort({rating:-1});
        const numberOfPages = Math.ceil(count / limit);
        const computers = await Computer.find({ brand, procesor, graphicsCard, memory, storage }).where("price").lte(price[1]).gte(price[0]).skip(skip).limit(limit).sort({rating:-1});

        return res.statut(200).json({
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