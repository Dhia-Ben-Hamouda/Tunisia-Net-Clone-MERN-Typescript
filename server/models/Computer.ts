import mongoose from "mongoose";

const computerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    reviews: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "reviews"
            }
        ],
        default: []
    },
    pictures: {
        type: [String],
        required: true,
        default: []
    },
    brand: {
        type: String,
        required: true,
        trim: true,
        enum: ["HP", "Asus", "Dell"]
    },
    procesor: {
        type: String,
        required: true,
        trim: true,
        enum: ["AMDRyzen5", "AMDRyzen7", "IntelCorei5", "IntelCorei7"]
    },
    memory: {
        type: String,
        required: true,
        trim: true,
        enum: ["8gb", "16gb", "24gb", "32gb"]
    },
    storage:{
        type:String,
        required:true,
        trim:true,
        enum:["1TB256GBSSD" , "1TBSSD" , "512GBSSD"]
    },
    graphicsCard: {
        type: String,
        required: true,
        trim: true,
        enum:["GTX1650" , "RTX3050" , "RTX3050ti"]
    }
})

export default mongoose.model("computers", computerSchema)