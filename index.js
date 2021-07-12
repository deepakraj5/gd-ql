const { ApolloServer } = require('apollo-server')
require('./db/mongoose')


const PORT = process.env.PORT || 3000



const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers')


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

server.listen({
    port: PORT
}).then(() => {
    console.log(`server upon port ${PORT}`)
})