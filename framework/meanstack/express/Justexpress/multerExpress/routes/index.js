var express = require('express');
var router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'public/images/uploads' });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/formsub', upload.single('vimmasterclass'), (req, res) => {
  res.json({
    field: req.body,
    image: req.file,
  });
});

module.exports = router;
