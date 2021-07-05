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

    extend type Mutation {
        createAuthor(author: AuthorRegister): Author!
    }

    extend type Query {
        getAuthors: [Author]
    }


`