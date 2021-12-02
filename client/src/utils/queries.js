import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      movies {
        _id
        title
        rating
        profit
        year
        imdbID
      }
    }
  }
`;

export const QUERY_MOVIES = gql`
  query savedMovies {
      movies {
        _id
        title
        rating
        profit
        year
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
        title
        rating
        profit
        year
        imdbID
      }
    }
  }
`;
