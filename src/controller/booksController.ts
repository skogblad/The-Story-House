import { Request, Response } from "express";
import Books from "../modules/Books";

export const fetchAllBooks = async (_: Request, res: Response) => {
    try{
        res.json(await Books.find())
    } catch (error: unknown){
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
};