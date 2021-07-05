const { registerBook, listBook } = require('../../controllers/book')



const Query = {
    getBooks: (_, args) => listBook()
}


const Mutation = {
    createBook: (_,args) => registerBook(args.book)
}


module.exports = {
    Query,
    Mutation    
}