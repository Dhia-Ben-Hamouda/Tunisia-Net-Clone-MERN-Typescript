import mongoose from "mongoose";

const screenSchema = new mongoose.Schema({
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
    rating:{
        type:Number,
        required:true,
        default:0
    },
    reviews:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"reviews"
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
    size:{
        type:String,
        required:true,
        trim:true,
        enum:["21","24","27","32"]
    },
    resolution:{
        type:String,
        required:true,
        trim:true,
        enum:["HD" , "Full HD" , "QHD" , "4K"]
    }
})

export default mongoose.model("screens" , screenSchema);