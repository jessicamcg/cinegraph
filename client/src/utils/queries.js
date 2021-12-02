import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      movies {
        _id
        Title
        Rating
        BoxOffice
        Year
        imdbID
      }
    }
  }
`;

export const QUERY_MOVIES = gql`
  query savedMovies {
     movies {
        _id
        Title
        Rating
        BoxOffice
        Year
        imdbID
      }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      movies {
        _id
        Title
        Rating
        BoxOffice
        Year
        imdbID
      }
    }
  }
`;

export const QUERY_SEARCH_MOVIE = gql`
  query movieData($query:String) {
    movieData(query:$query) {
      Title
      Rating
      BoxOffice
      Year
      imdbID
    }
  }
`