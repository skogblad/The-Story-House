import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
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
});

export default mongoose.model('Book', BookSchema);