import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import sharp from "sharp";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import User from "../models/User";

export async function signIn(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const exist = await User.findOne({ email });

        if (!exist) {
            return res.status(404).json({
                msg: "user with the given email doesn't exist"
            })
        }

        const match = await bcrypt.compare(password, exist.password);

        if (!match) {
            return res.status(401).json({
                msg: "wrong password"
            })
        }

        const accessToken = generateAccessToken({ name: exist.name, picture: exist.picture, email, password, phone: exist.phone, id: exist._id });
        const refreshToken = generateRefreshToken({ name: exist.name, picture: exist.picture, email, password, phone: exist.phone, id: exist._id });

        return res.status(200).cookie("refreshToken", refreshToken, { httpOnly: true }).json({
            msg: "logged in successfully",
            token: accessToken
        })

    } catch (err) {
        console.log(err);
        return res.status(400).json({
            msg: "error while signing in"
        })
    }
}

export async function signUp(req: Request, res: Response) {
    try {
        const { name, phone, email, password } = req.body;
        const exist = await User.findOne({ email });

        if (exist) {
            return res.status(400).json({
                msg: "user with the given email already exists"
            })
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        if (req.file) {
            const imageName = "users/" + Date.now() + "-" + req.file.originalname;
            const imagePath = "uploads/images/users/" + imageName;

            await sharp(req.file.buffer).toFile(imagePath);

            await User.create({
                name,
                phone,
                email,
                password: hashedPassword,
                picture: imageName
            });
        } else {
            await User.create({
                name,
                phone,
                email,
                password: hashedPassword
            });
        }

        return res.status(200).json({
            msg: "user has been created succcessfully"
        })

    } catch (err) {
        return res.status(400).json({
            msg: "error while signing up"
        })
    }
}

export async function forgetPassword(req: Request, res: Response) {
    try {
        const { email } = req.body;
        const exist = await User.findOne({ email });

        if (!exist) {
            return res.status(404).json({
                msg: "user with the given email doesn't exist"
            })
        }

        const link = `https://tunisia-net-clone.vercel.app/auth/resetPassword/${exist._id}`;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "tunisianetclone@gmail.com",
                pass: "fqfdacdxyfrupmhr"
            }
        })

        var mailOptions = {
            from: "tunisianetclone@gmail.com",
            to: email,
            subject: "Password Reset Email",
            text: `you can reset your password by clicking on the following link : ${link}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return res.status(200).json({
                    msg: "error while sending password reset email"
                })
            } else {
                return res.status(200).json({
                    msg: "a password reset link has been sent to your email"
                })
            }
        });


    } catch (err) {
        return res.status(400).json({
            msg: "error while sending password reset email"
        })
    }
}

export async function resetPassword(req: Request, res: Response) {
    try {
        const { password } = req.body;
        const { id } = req.params;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.findByIdAndUpdate(id, { password: hashedPassword });

        return res.status(200).json({
            msg: "password has been reset successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while resetting password"
        })
    }
}

function generateAccessToken(payload: any) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: "15m" });
}

function generateRefreshToken(payload: any) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string);
}