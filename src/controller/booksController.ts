import { request, Request, Response } from "express";
import Books from "../modules/Book";
import Book from "../modules/Book";

// Fetch all books
export const fetchAllBooks = async (_: Request, res: Response) => {
    try{
        res.json(await Books.find())
    } catch (error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
};

// Fetch book by id (NOT DONE! Fetch rewviews aswell)
export const fetchBook = async (req: Request, res: Response) => {
    try {
        res.json(await Books.findById({_id: req.params.id}));

    } catch (error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
}

// Add book
export const addBook = async (req: Request, res: Response) => {
    const {
        title, 
        description, 
        author, 
        genres,
        image,
        published_year
        //reviews
        } = req.body

    try {

        const book = new Book({
            title: title,
            description: description,
            author: author,
            genres: genres,
            image: image,
            published_year: published_year
            //reviews: reviews
        });
        const savedBook = await book.save();
        res.status(201).json({message: 'Book added.', data: savedBook})

    } catch (error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
}