const router = require('express').Router();
const path = require('path');
// const apiRoutes = require('./api');
const app = require('express')
const axios = require('axios')

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

const movieData = {
  movieQuery: async (query) => {
    console.log(query)
    return await axios({
      method: 'get',
      url: `http://www.omdbapi.com/?apikey=506676e3&t&t=${query}`,
    })
  }

}

module.exports = { movieData };


