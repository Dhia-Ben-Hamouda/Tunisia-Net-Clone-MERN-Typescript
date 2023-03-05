import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import User from "../models/User.js";

export async function signIn(req, res) {
    try {
        const { email, password } = req.body;
        const exist = await User.findOne({ email });

        if (exist) {
            const match = await bcrypt.compare(password, exist.password);

            if (match) {
                return res.status(200).json({
                    msg: "logged in successfully",
                    token: generateToken({
                        name: exist.name,
                        picture: exist.picture,
                        email,
                        password,
                        phone: exist.phone,
                        id: exist._id
                    }),
                    name: exist.name,
                    picture: exist.picture,
                    email,
                    password,
                    phone: exist.phone,
                    id: exist._id
                })
            } else {
                return res.status(401).json({
                    msg: "wrong password"
                })
            }
        } else {
            return res.status(404).json({
                msg: "user with the given email doesn't exist"
            })
        }
    } catch (err) {
        return res.status(400).json({
            msg: "error while signing in"
        })
    }
}

export async function signUp(req, res) {
    try {
        const { name, phone, email, password, picture } = req.body;

        const exist = await User.findOne({ email });

        if (exist) {
            return res.status(400).json({
                msg: "user with the given email already exists"
            })
        } else {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            await User.create({
                name,
                phone,
                email,
                password: hashedPassword,
                picture
            })

            return res.status(200).json({
                msg: "user has been created succcessfully"
            })
        }
    } catch (err) {
        return res.status(400).json({
            msg: "error while signing up"
        })
    }
}

export async function forgetPassword(req, res) {
    try {
        const { email } = req.body;
        const exist = await User.findOne({ email });

        if (!exist) {
            return res.status(404).json({
                msg: "user with the given email doesn't exist"
            })
        }

        const link = `http://localhost:5000/auth/resetPassword/${exist._id}`;

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
                    msg:"error while sending password reset email"
                })
            } else {
                return res.status(200).json({
                    msg:"a password reset link has been sent to your email"
                })
            }
        });


    } catch (err) {
        return res.status(400).json({
            msg: "error while sending password reset email"
        })
    }
}

export async function resetPassword(req, res) {
    try {
        const { password } = req.body;
        const { id } = req.params;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password , salt);

        await User.findByIdAndUpdate(id , { password: hashedPassword });

        return res.status(200).json({
            msg:"password has been reset successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while resetting password"
        })
    }
}

function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
}