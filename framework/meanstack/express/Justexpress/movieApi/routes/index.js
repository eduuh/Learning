var express = require('express');
var router = express.Router();
const movies = require('../data/movies');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/most_popular', (req, res, next) => {
  //get the page variable form the query string
  let page = req.query.page;
  if (page === undefined) {
    page = 1;
  }

  let results = movies.filter((movie) => {
    return movie.most_popular;
  });
  const indexToStart = (page - 1) * 20;
  results = results.slice(indexToStart, indexToStart + 19);
  if (!results) {
    res.json({ msg: 'item not found' });
  } else {
    res.json({
      page,
      results,
    });
  }
});

module.exports = router;
