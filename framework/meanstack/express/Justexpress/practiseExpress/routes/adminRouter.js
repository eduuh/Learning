const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
  res.json({ name: 'Router.js is working' });
});

module.exports = route;
