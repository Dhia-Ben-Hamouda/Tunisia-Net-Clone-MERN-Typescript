import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { MyRequest } from "../@types/types";

export default function authMiddleware(req: MyRequest, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
        return res.status(401).json({
            msg: "json web token is required to access this route"
        })
    }

    try {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);

        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({
            msg: "invalid token"
        })
    }
}