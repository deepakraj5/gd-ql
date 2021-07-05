const { gql } = require('apollo-server')
const authorSchema = require('./author')
const bookSchema = require('./book')

module.exports = gql`

    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }

    ${authorSchema}
    ${bookSchema}

`