var express = require('express');
const { head } = require('../app');
var router = express.Router();

function handlereq(req, res, next) {
  res.writeHead(200, {'content-type': 'application/json'});
  let path    =  req.path;
  let headers =  req.headers;
  let params =   req.query;
  let body =     req.body;


  let resp = {
    'path' : path,
    'msg' : 'okie dokie',
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
