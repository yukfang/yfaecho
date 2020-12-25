var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.writeHead(200, {'content-type': 'application/json'});
  let headers =  JSON.stringify(req.headers, null, 2);
  let params =   JSON.stringify(req.query, null, 2);

  res.write('headers:');
  res.write(headers);
  res.write(' params:');
  res.write(params);
  res.end();
});

module.exports = router;
