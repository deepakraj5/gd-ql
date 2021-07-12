const { gql } = require('apollo-server')

module.exports = gql`


    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    input UserInput {
        username: String!
        email: String!
        password: String!
    }


    extend type Mutation {
        registerUser(userInput: UserInput): User!
    }

    type Token {
        token: String!
    }

    extend type Query {
        userLogin(email: String!, password: String!): Token!
    }



`