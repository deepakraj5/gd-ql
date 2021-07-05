const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    authorId: String
})


const Book = mongoose.model('Book', bookSchema)

module.exports = Book