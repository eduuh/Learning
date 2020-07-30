const express = require('express');
const userRouter = express.Router();

function validateUser(req, res, next) {
  console.log('User Validated');
  res.locals.validated = true;
  next();
}
userRouter.use(validateUser);

userRouter.get('/', (req, res, next) => {
  res.json({ name: 'UserRouter.js is working' });
});

userRouter.param('id', (req, res, next, id) => {
  console.log('the params is', id);
});

userRouter.get('/:userid', (req, res, next) => {
  console.log(req.params.userid);
  res.json({ name: 'UserRouter.js is working' });
});

module.exports = userRouter;
