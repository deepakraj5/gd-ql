const { registerAuthor, listAuthors,getAuthor } = require('../../controllers/author')


const Mutation = {
    createAuthor: (_, args, context) => registerAuthor(args.author, context)
}

const Query = {
    getAuthors: (_, args, context) => listAuthors(context),
    getAuthor: (_, args) => getAuthor(args)
}


module.exports = {
    Mutation,
    Query
}
