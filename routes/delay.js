var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.writeHead(200, { 'content-type': 'application/json' });
  var path = req.baseUrl;
  var seconds = parseInt(path.split('/')[2]);

  setTimeout((function () {
    let msg = 'Response delay for ';
    msg += JSON.stringify(seconds, null, 2) + " seconds @ " + (new Date().toUTCString());
    res.write(msg);
    res.end();
  }), seconds * 1000);
});

module.exports = router;
