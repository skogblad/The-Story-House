import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
      type: String,
      required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    }, 
    created_at: {
      type: Date,
      default: Date.now
    }
  });

  export default mongoose.model('Book', BooksSchema);
