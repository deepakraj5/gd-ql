const { gql } = require('apollo-server')

module.exports = gql`

    type Author {
        id: ID!
        name: String!
        age: ID!
        email: String!
    }

    input AuthorRegister{
        name: String!
        age: ID!
        email: String!
    }

    type AuthorBooks {
        _id: ID
        name: String
        age: ID
        email: String
        books: [Book]
    }

    extend type Mutation {
        createAuthor(author: AuthorRegister): Author!
    }

    extend type Query {
        getAuthors: [Author]
        getAuthor(id: String!): [AuthorBooks]
    }

`