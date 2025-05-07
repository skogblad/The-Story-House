import express from "express";
import { fetchAllBooks } from "../controller/booksController";

const booksRouter = express.Router();

booksRouter.get('/', fetchAllBooks)
/*router.get('/:id', fetchBook)
router.post('/', insertBook)
router.patch('/:id', updateBook)
router.delete('/:id', deleteBook )*/

export default booksRouter;