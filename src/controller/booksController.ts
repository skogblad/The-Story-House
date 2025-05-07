import { request, Request, Response } from "express";
import Books from "../modules/Books";

// Fetch all books
export const fetchAllBooks = async (_: Request, res: Response) => {
    try{
        res.json(await Books.find())
    } catch (error: unknown){
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
};

// Fetch book by id (NOT DONE! Fetch rewviews aswell)
export const fetchBook = async (req: Request, res: Response) => {
    try {
        res.json(await Books.findById({_id: req.params.id}));

    } catch (error: unknown){
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
}

// Add book
export const addBook = async (req: Request, res: Response) => {
    try {
        res.json(await Books.insertOne(Books));

    } catch (error: unknown){
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
}