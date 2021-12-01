const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedMovies: [Movies]
    }

    type Movies {
        _id: ID
        title: String
        rating: String
        profit: String
        year: String
        imdbID: String
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        savedMovies(username: String): [Movies]
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveMovie(
            _id: ID,
            title: String,
            rating: Int,
            profit: Int,
            year: Int,
            imdbID: String,
        ): Movies
        removeMovie(imdbID: String!): Movies
    }
`


module.exports = typeDefs;
