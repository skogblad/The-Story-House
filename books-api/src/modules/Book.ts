import mongoose from "mongoose";
import { IBook } from "../types/IBook";
const Schema = mongoose.Schema;

const BookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true
  },
  description: String,
  author: {
    type: String,
    required: true
  },
  genres: Array,
  image: String,
  published_year: Number,
  reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reviews"
    }]
}, {
  timestamps: true
});

export default mongoose.model('Book', BookSchema);