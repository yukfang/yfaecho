var express = require('express');
var router = express.Router();

function handlereq(req, res, next) {
  res.writeHead(200, {'content-type': 'application/json'});
  let path    =  JSON.stringify(req.path, null, 2);
  let headers =  JSON.stringify(req.headers, null, 2);
  let params =   JSON.stringify(req.query, null, 2);
  let body =   JSON.stringify(req.body, null, 2);

  res.write(' path:');
  res.write(path);
  res.write(' headers:');
  res.write(headers);
  res.write(' params:');
  res.write(params);
  res.write(' body:');
  res.write(body);
  res.end();
}

router.post('/', handlereq);

router.get('/', function(req, res, next) {
  res.writeHead(200, {'content-type': 'application/json'});
  let path    =  JSON.stringify(req.path, null, 2);
  let headers =  JSON.stringify(req.headers, null, 2);
  let params =   JSON.stringify(req.query, null, 2);
  let body =   JSON.stringify(req.body, null, 2);

  res.write(' path:');
  res.write(path);
  res.write(' headers:');
  res.write(headers);
  res.write(' params:');
  res.write(params);
  res.write(' body:');
  res.write(body);
  res.end();
});

module.exports = router;
