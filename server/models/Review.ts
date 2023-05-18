import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    createdAt:{
        type:Date,
        required:true,
        default:new Date()
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        required:true
    },
    commenter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

export default mongoose.model("reviews" , commentSchema);