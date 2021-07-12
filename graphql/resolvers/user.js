const { registerUser, userLogin } = require('../../controllers/user')


const Query = {
    userLogin: (_, args) => userLogin(args)
}

const Mutation = {
    registerUser: (_, args) => registerUser(args.userInput)
}






module.exports = {
    Query, Mutation
}