import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_MOVIE = gql`
  mutation saveMovie (
    $Title: String
    $Rating: String
    $BoxOffice:String
    $Year: String
    $imdbID: String
  ) {
      saveMovie(
        Title: $Title
        Rating: $Rating
        BoxOffice: $BoxOffice
        Year: $Year
        imdbID : $imdbID
      ) {
      
            Title
            Rating
            BoxOffice
            Year
            imdbID
        
      }
  }
`

export const REMOVE_MOVIE = gql`
    mutation removeMovie ( $imdbID: String ) {
        removeMovie ( imdbID: $imdbID ) {
          Title
          Rating
          BoxOffice
          Year
          imdbID
        }
    }
`