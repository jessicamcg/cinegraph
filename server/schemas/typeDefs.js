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
        imdbID: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
   

    type Query {
        movieData(query:String): Movies
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
            Title: String,
            Rating: Int,
            BoxOffice: Int,
            Year: Int,
            imdbID: String,
        ): Movies
        removeMovie(imdbID: String!): Movies
        saveOmdbMovie: Movies
    }

  
`


module.exports = typeDefs;
