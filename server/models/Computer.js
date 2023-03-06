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
    comments: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "comments"
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
        enum: ["AMD Ryzen 5", "AMD Ryzen 7", "Intel Core i5", "Intel Core i7"]
    },
    memory: {
        type: String,
        required: true,
        trim: true
    },
    graphicsCard: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model("computers", computerSchema)