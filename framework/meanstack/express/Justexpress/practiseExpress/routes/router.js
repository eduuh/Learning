const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/', (req, res, next) => {
  res.json({ name: 'adminRouter.js is working' });
});

adminRouter.get('/:adminid', (req, res, next) => {
  console.log(req.params.adminid);
  res.json({ name: 'adminRouter.js is working' });
});

module.exports = adminRouter;
