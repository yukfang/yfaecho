var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.writeHead(200, {'content-type': 'application/json'});
  let msg = '';
  msg += JSON.stringify(req.headers, null, 2);
  res.write(msg);
  res.end();
});

module.exports = router;
