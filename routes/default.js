var express = require('express');
const { head } = require('../app');
var router = express.Router();

function handlereq(req, res, next) {
  res.writeHead(200, {'content-type': 'application/json'});
  let path    =  JSON.stringify(req.path, null, 2);
  let headers =  JSON.stringify(req.headers, null, 2);
  let params =   JSON.stringify(req.query, null, 2);
  let body =   JSON.stringify(req.body, null, 2);

  let resp = {
    'path' : path,
    'headers' : headers,
    'params' : params,
    'body' : body
  };

  res.write(JSON.stringify(resp, null, 2));
  res.end();
}

router.post('/', handlereq);
router.get('/', handlereq);

module.exports = router;
