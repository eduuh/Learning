const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ msg: 'My first router' });
});

/*router.all;*/
/*router.use;*/
/*router.post;*/
/*router.put;*/
module.exports = router;
