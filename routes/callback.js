var express = require('express');
var fs = require('fs');

const { head } = require('../app');
var router = express.Router();

function handleCb(req, res, next) {
  res.writeHead(200, {'content-type': 'application/json'});
  let path    =  req.baseUrl;
  let params  =  req.query;
  let body    =  req.body;
  let headers =  req.headers;

  let resp = {
     "dir": __dirname,
     body,
     path,
     headers,
     params
  };

  let output = JSON.stringify(resp, null, 2);

  fs.writeFile(__dirname + 'mynewfile3.txt', output, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  res.write(output);
  res.end();
}

router.post('/', handleCb);
router.get('/', handleCb);

module.exports = router;
