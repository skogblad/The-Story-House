import { Request, Response } from "express";
import Review from "../modules/Review";
import Book from "../modules/Book";

export const fetchAllReviews = async (req: Request, res: Response) => {
    try {
        res.json(await Review.find())
    }  catch(error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error"
        res.status(500).json({error: message})
    }
}

export const fetchReview = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const review = await Review.findOne({_id: id});

        if (!review) {
            res.status(404).json({message: "Review not found"})
            return;
        }
        res.json(review);

    } catch(error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error"
        res.status(500).json({error: message})
    }
}

export const createReview = async (req: Request, res: Response) => {
    const { name, content, rating, books_id } = req.body;

    if (books_id === undefined) {
        res.status(400).json({error: "books_id is required"})
        return;
    }

    try {
        const review = new Review({
            name: name,
            content: content,
            rating: rating,
            books_id: books_id
        });

        const newReview = await review.save();

        await Book.findByIdAndUpdate(books_id, {$push: {reviews: newReview.id}});
        //await Review.findByIdAndUpdate(books_id, {$push: {review: newReview.id}}); 

        res.status(201).json({message: "Review created!", data: newReview});

    } catch(error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error"
        res.status(500).json({error: message})
    }
}

export const updateReview = async (req: Request, res: Response) => {
    const { name, content, rating, id } = req.body;

    try {
        const updatedReview = await Review.updateOne({_id: id}, {$set: { name: name, content: content, rating: rating}});

        if (updatedReview.matchedCount === 0) {
            res.status(404).json({success: false, message: "Review not found"});
            return;
        }

        res.json({message: "Review updated!", data: await Review.findById(id)});

    } catch(error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error"
        res.status(500).json({error: message})
    }
}

export const deleteReview = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const deletedReview = await Review.deleteOne({_id: id});

        if(deletedReview.deletedCount === 0) {
            res.status(404).json({success: false, message: "Review not found"});
            return;
        }
        res.json({message: "Review deleted!"});

    } catch(error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error"
        res.status(500).json({error: message})
    }
}