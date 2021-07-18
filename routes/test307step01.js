var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(307, '/path_after_307');
});

module.exports = router;
