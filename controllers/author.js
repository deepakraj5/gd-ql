const Author = require('../models/author')

const registerAuthor = async (data) => {
    try {

        const { name, email, age } = data
        const author = new Author({ name, email, age })
        await author.save()

        return author


    } catch (error) {
        return error
    }
}

const listAuthors = async () => {
    try {
        
        const authors = await Author.find()
        return authors

    } catch (error) {
        return error
    }
}

module.exports = {
    registerAuthor,
    listAuthors
}