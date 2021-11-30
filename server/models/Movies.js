const { Schema, model } = require('mongoose');

const moviesSchema = new Schema({
    title: {
        type: String,
        required: 'You need to enter a movie',
        trim: true,
        unique: true
    },
    rating: {// rotten tom
        type: String,
        required: true
    },
    profit: {//boxoffice
        type: String,
        required: true
    },
    year: {
        type: Number
    }
});

const Movies = model('Movies', moviesSchema);

module.exports = Movies;
