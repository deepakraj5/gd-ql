const { gql } = require('apollo-server')

module.exports = gql`

    type Book {
        id:ID!
        name: String!
        authorId: String!
    }

    extend type Query {
        getBooks: [Book]!
    }

    input BookRegister {
        name: String!
        authorId: String!
    }

    extend type Mutation {
        createBook(book: BookRegister): Book!
    }


`