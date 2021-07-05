const { registerAuthor, listAuthors } = require('../../controllers/author')


const Mutation = {
    createAuthor: (_, args) => registerAuthor(args.author)
}

const Query = {
    getAuthors: (_, args) => listAuthors()
}


module.exports = {
    Mutation,
    Query
}
