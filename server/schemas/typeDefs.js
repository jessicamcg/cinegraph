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
        Title: String
        Rating: String
        BoxOffice: String
        Year: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
   

    type Query {
        movieData: Movies
        users: [User]
        user(username: String!): User
        savedMovies(username: String): [Movies]
        me: User
    }

    type Mutation {
        saveOmdbMovie: Movies
    }

  
`


module.exports = typeDefs;

// type Mutation {
//     addUser(username: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
// }