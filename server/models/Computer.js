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
    }
})

export default mongoose.model("computers" , computerSchema)