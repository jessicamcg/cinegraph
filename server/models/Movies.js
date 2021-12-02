const { Schema, model } = require('mongoose');

const moviesSchema = new Schema({
    Title: {
        type: String,
        required: 'You need to enter a movie',
        trim: true,
        unique: true
    },
    Rating: {// rotten tom
        type: String,
        required: true
    },
    BoxOffice: {//boxoffice
        type: String,
        required: true
    },
    Year: {
        type: String
    },
    imdbID: {
        type: String
    }
});

const Movies = model('Movies', moviesSchema);

module.exports = Movies;
