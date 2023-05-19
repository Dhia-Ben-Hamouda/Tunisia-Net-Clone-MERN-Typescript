import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: false,
        default: "images/profile.png"
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"],
        default: "user"
    }
})

export default mongoose.model("users", userSchema);