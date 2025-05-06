import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    id: {
        type: Number,
        default: false
    },
    content: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
        type: String,
        required: true
      },
    created_at: {
      type: Date,
      default: Date.now
    }
  });

  export default mongoose.model('Books', BooksSchema);
