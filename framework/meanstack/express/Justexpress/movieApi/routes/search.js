var express = require('express');
var router = express.Router();
const movies = require('../data/movies');
const people = require('../data/people');

function queryRequired(req, res, next) {
  const searchTerm = req.query.query;
  if (!searchTerm) {
    res.json({ msg: 'Query is required' });
  } else {
    next();
  }
}
/* GET search  page. */
///search/..

router.use(queryRequired);

router.get('/movie', (req, res, next) => {
  const searchTerm = req.query.query;
  const results = movies.filter((movies) => {
    let found = false;
    found =
      movies.overview.includes(searchTerm) || movies.title.includes(searchTerm);
    return found;
  });
  res.json({ results });
});

router.get('/people', (req, res, next) => {
  const searchTerm = req.query.query;
  const results = people.filter((person) => {
    let found = false;
    found = person.name.includes(searchTerm);
    return found;
  });
  res.json({ results });
});

module.exports = router;
