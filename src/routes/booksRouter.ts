import express from "express";
import { fetchAllBooks, fetchBook, addBook, updateBook, deleteBook } from "../controller/booksController";
import { verifyAccessToken } from "../middleware/verifyToken";

const booksRouter = express.Router();

booksRouter.get('/', fetchAllBooks)
booksRouter.get('/:id', fetchBook)

// 🔐 Protected endpoints
booksRouter.post('/', addBook)
booksRouter.patch('/:id', updateBook)
booksRouter.delete('/:id', verifyAccessToken, deleteBook )

export default booksRouter;