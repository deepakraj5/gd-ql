const Author = require('../models/author')
const mongoose = require('mongoose')
const { auth } = require('../middleware/auth')

const registerAuthor = async (data, context) => {
    try {

        const middleAuth = await auth(context)

        const { name, email, age } = data
        const author = new Author({ name, email, age })
        await author.save()

        return author


    } catch (error) {
        return error
    }
}

const listAuthors = async (context) => {
    try {
        const middleAuth = await auth(context)
        const authors = await Author.find()
        return authors

    } catch (error) {
        return error
    }
}


const getAuthor = async (id) => {
    try {
        
        console.log(id.id)

        const objId = mongoose.Types.ObjectId(id.id)

        const result = await Author.aggregate([ 
            {
                $match: { _id: objId }
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "authorId",
                    as: "books"
                }
            }
        ])

        console.log(result)
        console.log(result[0].books)

        return result

    } catch (error) {
        return error
    }
}




module.exports = {
    registerAuthor,
    listAuthors,
    getAuthor
}