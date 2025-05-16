import { IReview } from "./IReview";

export interface IBook {
    title: String,
    description?: String,
    author: String,
    genres?: String[],
    image?: String,
    published_year?: Number,
    reviews: IReview[],
    createdAt?: Date
}