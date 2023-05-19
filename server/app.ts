import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import computerRoutes from "./routes/computerRoutes";
import keyboardRoutes from "./routes/keyboardRoutes";
import mouseRoutes from "./routes/mouseRoutes";
import screenRoutes from "./routes/screenRoutes";
import productRoutes from "./routes/productRoutes";
import reviewRoutes from "./routes/reviewRoutes";

const app = express();

// middleware

app.use(express.json({limit:"1mb"}));
app.use(express.static("uploads"));
mongoose.set('strictQuery', false);
dotenv.config();
app.use(cors({
    origin:"*"
}))

// env variables

const port = process.env.PORT || 5000;
const url = process.env.URL as string;

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
app.use("/reviews" , reviewRoutes);