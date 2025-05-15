export class Review {
  constructor(
    name = "",
    content = "",
    rating = 0,
    created_at = "",
    books_id = ""
  ) {
    this.name = name
    this.content = content
    this.rating = Number(rating)
    this.created_at = created_at || new Date().toISOString()
    this.books_id = books_id
  }
}