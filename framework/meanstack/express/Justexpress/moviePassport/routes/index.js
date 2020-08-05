var express = require('express');
var router = express.Router();
var request = require('request');
const passport = require('passport');

const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
//const apiKey = '123456789';
const apiBaseUrl = 'http://api.themoviedb.org/3';
//const apiBaseUrl = 'http://localhost:3030';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
//const nowPlayingUrl = `${apiBaseUrl}/most_popular?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';
//localhost:3030/most_popular?api_key=123456789
router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

router.get('/', function (req, res, next) {
  console.log('user info please');
  console.log(req.user);

  //console.log(nowPlayingUrl);
  request.get(nowPlayingUrl, (error, response, movieData) => {
    const parseData = JSON.parse(movieData);
    console.log(parseData);
    res.render('index', {
      parsedData: parseData.results,
    });
  });
});

router.get('/login', passport.authenticate('github'));
router.get(
  '/auth',
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/loginFailed',
  })
);

router.get('/movie/:id', (req, res, next) => {
  const movieid = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieid}?api_key=${apiKey}`;
  request.get(thisMovieUrl, (error, response, movieData) => {
    const parseData = JSON.parse(movieData);
    res.render('single-movie', { parsedData: parseData });
  });
});

router.post('/search', (req, res, next) => {
  const userSearchTerm = encodeURI(req.body.movieSearch);

  const cat = req.body.cat;

  const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${apiKey}`;
  //res.json(movieUrl);
  request.get(movieUrl, (error, response, movieData) => {
    let parseData = JSON.parse(movieData);

    if (cat === 'person') {
      parseData.results = parseData.results[0].known_for;
    }
    console.log(movieUrl);
    //res.json({ parsedData: parseData });
    res.render('index', {
      parsedData: parseData.results,
    });
  });
});

module.exports = router;
