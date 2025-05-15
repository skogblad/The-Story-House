import mongoose from "mongoose";
import { IReview } from "../types/IReview";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema<IReview>({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Reviews", ReviewSchema);