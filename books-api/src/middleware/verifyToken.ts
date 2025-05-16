import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.cookies.accessToken)
    if(req.cookies.accessToken === undefined) {
    res.status(401)
    return;
    }

    jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET || "", function(err: jwt.VerifyErrors | null) {
        if(err) {
            res.sendStatus(403);
            return;
        }

        next();
    });
}