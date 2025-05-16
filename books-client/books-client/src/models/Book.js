export class Book {
  constructor(
    _id = "",
    title = "",
    author = "",
    description = "",
    genres = [],
    createdAt = "",
    image = "",
    published_year = 0,
    reviews = []
  ) {
    this._id = _id
    this.title = title
    this.author = author
    this.description = description
    this.genres = genres
    this.published_year = Number(published_year)
    this.createdAt = createdAt || new Date()
    this.image = image
    this.reviews = reviews
  }
}