import { Request, Response } from "express";
import Review from "../modules/Review";

export const fetchAllReviews = async (req: Request, res: Response) => {
    try {
        res.json(await Review.find())
    }   catch(error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error"
        res.status(500).json({error: message})
    }
}