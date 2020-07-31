var express = require('express');
var router = express.Router();

const moviesDetails = require('../data/movieDetails');
//[> GET movies  page. <]
//router.get('/', function (req, res, next) {
//res.render('index', { title: 'Express' });
//});
//

// get movie/:moviesid/
// get movie/top_rated/
// DELETE movie/top_rated/
// post movie/:moviesid/rating

function requireJSON(req, res, next) {
  if (!req.is('application/json')) {
    res.json({ msg: 'content type should be application/json ' });
  } else {
    res.json('text');
  }

  next();
}
router.param('movieid', (req, res, next) => {
  console.log('save something to db');
  next();
});

router.get('/top_rated', (req, res, next) => {
  let page = req.query.page;
  if (!page) {
    page = 0;
  }
  const results = moviesDetails.sort((a, b) => {
    return b.vote_average - a.vote_average;
  });
  res.json(results.slice(page, page + 20));
});

// Get This should always get last.
router.get('/:moviesid', (req, res, next) => {
  const moviesid = req.params.moviesid;
  const result = moviesDetails.find((movie) => {
    //console.log(movie.id, ' ======', moviesid);
    return movie.id === Number(moviesid);
  });
  res.status(401); //Unauthorized = 401, Not a 200
  if (!result) {
    res.json({ msg: 'item not found' });
  } else {
    res.json(result);
  }
});

router.post('/:movieid/rating', requireJSON, (req, res, next) => {
  const movieid = req.params.movieid;
  //console.log(req.get('Content-type'));
  const userRating = req.body.value;
  if (userRating < 0.5 || userRating > 10) {
    res.json({ msg: 'Rating must be bettween .5 to 10' });
  } else {
    res.json({ msg: 'Thanks for submitting your rating', status_code: 200 });
  }
});

router.delete('/:movieid/rating', requireJSON, (req, res, next) => {});

module.exports = router;
