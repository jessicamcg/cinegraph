const router = require('express').Router();
const path = require('path');
// const apiRoutes = require('./api');
const app = require('express')
const axios = require('axios')
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
  const movieData = {
    async movieQuery(){
      return await axios({
        method: 'get',
        url: `http://www.omdbapi.com/?apikey=506676e3&t&t=`+ `The+Big+Sleep`,
      })
    }
    
  }

  module.exports = { movieData };
  

