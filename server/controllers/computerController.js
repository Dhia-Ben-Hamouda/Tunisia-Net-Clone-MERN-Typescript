import Computer from "../models/Computer.js";

export async function getPaginatedComputers(req,res){
    try{
        const {  } = req.query.params;


    }catch(err){
        return res.status(400).json({
            msg:"error while fetching computers"
        })
    }
}

export async function getComputer(req,res){
    try{
        const { id } = req.params;

        const computer = await Computer.findById(id);
        return res.status(200).json(computer);
    }catch(err){
        return res.status(400).json({
            msg:"error while fetching computer"
        })
    }
}

export async function insertComputer(req,res){
    try{
        await Computer.create(req.body);

        return res.status(201).json({
            msg:"computer has been inserted successfully"
        })
    }catch(err){
        return res.status(400).json({
            msg:"error while inserting computer"
        })
    }
}

export async function deleteComputer(req,res){
    try{
        const { id } = req.params;
        await Computer.findByIdAndDelete(id);

        return res.status(201).json({
            msg:"computer has been deleted successfully"
        })
    }catch(err){
        return res.status(400).json({
            msg:"error while deleting computer"
        })
    }
}

export async function updateComputer(req,res){
    try{
        const { id } = req.params;
        await Computer.findByIdAndUpdate(id , req.body);

        return res.status(201).json({
            msg:"computer has been updated successfully"
        })
    }catch(err){
        return res.status(400).json({
            msg:"error while updating computer"
        })
    }
}