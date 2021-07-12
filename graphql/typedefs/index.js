const { gql } = require('apollo-server')
const authorSchema = require('./author')
const bookSchema = require('./book')
const userSchema = require('./user')

module.exports = gql`

    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }

    ${authorSchema}
    ${bookSchema}
    ${userSchema}

`