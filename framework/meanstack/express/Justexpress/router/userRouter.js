const express = require('express');
const userRouter = express.Router();

/*validateUser is middleware that will only be added to this route*/
/*other routes does not no about this route*/
function validateUser(req, res, next) {
  res.locals.validate = true;
  console.log('validated');
  next();
}

userRouter.use(validateUser);

userRouter.get('/', (req, res, next) => {
  res.json('user router');
});

module.exports = userRouter;
