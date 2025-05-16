import { Request, Response } from "express";
import Review from "../modules/Review";
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

// Fetch book and reviews 
export const fetchBook = async (req: Request, res: Response) => {
    try {
        const book = await Books.findById(req.params.id).populate('reviews');    

        if(!book){
            res.status(404).json({success: false, message: 'Book not found.'});
            return;
        }

        res.json(book);

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
        } = req.body

    try {
        const book = new Book({
            title: title,
            description: description,
            author: author,
            genres: genres,
            image: image,
            published_year: published_year
        });

        const savedBook = await book.save();
        res.status(201).json({message: 'Book added.', data: savedBook})

    } catch (error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
}

// Update book
export const updateBook = async (req: Request, res: Response) => {
    const {
        title, 
        description, 
        author, 
        genres,
        image,
        published_year
        } = req.body;

    try {
        const updatedBook = await Books.updateOne(
            {_id: req.params.id},
            {$set: {
                title: title,
                description: description,
                author: author,
                genres: genres,
                image: image,
                published_year: published_year
                }  
            }
        );

        if(updatedBook.matchedCount === 0){
            res.status(404).json({success: false, message: 'Book not found.'});
        }
        res.json({message: 'Book updated.', data: await Books.findById(req.params.id)});
     
    } catch (error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
}

// Delete book
export const deleteBook = async (req: Request, res: Response) => {

    try {
        const deletedBook = await Books.deleteOne(
            { _id: req.params.id}
        );

        if(deletedBook.deletedCount === 0){
            res.status(404).json({success: false, message: 'Book was not found.'});
            return;
        }

        res.json({message: 'Book is deleted.'});

    } catch (error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
} 