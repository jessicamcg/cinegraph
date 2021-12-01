const router = require('express').Router();
const path = require('path');
// const apiRoutes = require('./api');
const app = require('express')
const axios = require('axios')
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
  
function movieQuery(query){
  fixedQuery = query.split(' ').join('+')
  console.log(fixedQuery)
  axios({
    method: 'get',
    url: `http://www.omdbapi.com/?apikey=506676e3&t&t=`+ fixedQuery,
  })
    .then(function (response) {
      console.log(response)
    });
  // fetch(`http://www.omdbapi.com/?apikey=506676e3&t&t=`+ fixedQuery)
  // .then(res => (console.log(res)))
}
let string = 'The Big Sleep'
movieQuery(string)

  module.exports = movieQuery;
  
