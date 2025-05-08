import express from "express";
import { fetchAllBooks, fetchBook, addBook, updateBook, deleteBook } from "../controller/booksController";

const booksRouter = express.Router();

booksRouter.get('/', fetchAllBooks)
booksRouter.get('/:id', fetchBook)
booksRouter.post('/', addBook)
booksRouter.patch('/:id', updateBook)
booksRouter.delete('/:id', deleteBook )

export default booksRouter;