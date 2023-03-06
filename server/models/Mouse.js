import mongoose from "mongoose";

const mouseSchema = new mongoose.Schema({
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
        ],
        default:[]
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
    wireless:{
        type:String,
        required:true,
        trim:true,
        enum:["yes","no"]
    }
})

export default mongoose.model("mouses" , mouseSchema);