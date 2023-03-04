import jwt from "jsonwebtoken";

export default function authMiddleware(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).json({
            msg:"json web token is required to access this route"
        })
    }

    try{
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token , process.env.JWT_SECRET);

        req.user = user;
        next();
    }catch(err){
        return res.status(400).json({
            msg:"invalid token"
        })
    }
}