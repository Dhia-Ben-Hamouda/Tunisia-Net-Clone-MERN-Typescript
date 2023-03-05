import mongoose from "mongoose";

const computerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    comments:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"comments"
            }
        ]
    },
    pictures:{
        type:[String],
        required:true
    },
    brand:{
        type:String,
        required:true,
        trim:true
    },
    procesor:{
        type:String,
        required:true,
        trim:true
    },
    memory:{
        type:String,
        required:true,
        trim:true
    },
    graphicsCard:{
        type:String,
        required:true,
        trim:true
    }
})

export default mongoose.model("computers" , computerSchema)