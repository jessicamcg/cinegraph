const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Movie, User } = require('../models')
const { movieData } = require('../utils/movieQuery')

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('movies');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('movies');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('movies');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    movieData: async () => {
      const data = await movieData.movieQuery();
      const movieInfo = data.data
      movieInfo.Rating = data.data.Ratings[1].Value
      console.log(movieInfo)
      return movieInfo


    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveOmdbMovie: async (parent, args) => {
      const data = await movieData.movieQuery();
      const movieInfo = {}
      movieInfo.Title = data.data.Title
      movieInfo.Rating = data.data.Ratings[1].Value
      movieInfo.BoxOffice = data.data.BoxOffice
      movieInfo.Year = data.data.Year
      console.log(movieInfo)
      return movieInfo
      // movieInfo.title = data.data.Title
      // movieInfo.title = data.data.Title

    },

    //     saveMovie: async () => {
    //       const savedMovie = await Movie.create(args);
    //         return savedMovie;
    //     },
    removeMovie: async (parent, { imdbID }, context) => {
      if (context.user) {
        return Movie.findOneAndUpdate(
          { _id: imdbID },
          {
            $pull: {
              movies: { _id: imdbID },
            },
          },
          { new: true }
        );
      }
    }
  }
}


module.exports = resolvers;
