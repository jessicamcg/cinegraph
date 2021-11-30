const { Schema, model } = require('mongoose');

const moviesSchema = new Schema({
    title: {
        type: String,
        required: 'You need to enter a movie',
        trim: true,
        unique: true
    },
    rating: {// rotten tom
        type: Number,
        required: true
    },
    profit: {//boxoffice
        type: Number,
        required: true
    },
    year: {
        type: Number
    }
});

const Movies = model('Movies', moviesSchema);

module.exports = Movies;
