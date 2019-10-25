var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/aaa', function(req, res, next) {
  res.send('your point is in: BLAH BLAH');
});

module.exports = router;
