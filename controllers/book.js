const Book = require('../models/book')

const registerBook = async (data) => {
    try {

        const { name, authorId } = data
        const book = new Book({ name, authorId })
        await book.save()

        return book


    } catch (error) {
        return error
    }
}

const listBook = async () => {
    try {
        
        const books = await Book.find()
        return books

    } catch (error) {
        return error
    }
}

module.exports = {
    registerBook,
    listBook
}