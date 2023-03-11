import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    createdAt:{
        type:Date,
        default:new Date()
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    commenter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

export default mongoose.model("comments" , commentSchema);