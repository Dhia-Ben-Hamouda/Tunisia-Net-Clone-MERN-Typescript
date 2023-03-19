import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import computerRoutes from "./routes/computerRoutes.js";
import keyboardRoutes from "./routes/keyboardRoutes.js";
import mouseRoutes from "./routes/mouseRoutes.js";
import screenRoutes from "./routes/screenRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// middleware

app.use(express.json({limit:"1mb"}));
mongoose.set('strictQuery', false);
dotenv.config();
app.use(cors({
    origin:"*"
}))

// env variables

const port = process.env.PORT || 5000;
const url = process.env.URL;

// connecting to mongoDB

mongoose.connect(url)
.then(()=>{console.log("connected to mongoDB !")})
.catch((err)=>{console.error(err)});

// launching the app

app.listen(port , ()=>{
    console.log(`listening to requests on port ${port}`);
})

// handle routes

app.use("/auth" , authRoutes);
app.use("/computers" , computerRoutes);
app.use("/keyboards" , keyboardRoutes);
app.use("/mouses" , mouseRoutes);
app.use("/screens" , screenRoutes);
app.use("/products" , productRoutes);