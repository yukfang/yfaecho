var express = require('express');
const { head } = require('../app');
var router = express.Router();

function handlereq(req, res, next) {
  res.writeHead(200, {'content-type': 'application/json'});
  let path    =  req.baseUrl;
  let headers =  req.headers;
  let params  =  req.query;
  let body    =  JSON.parse(req.body);


  let resp = {
    'body'    : body,
    path      : path,
    'msg'     : 'okie dokie',
    'headers' : headers,
    'params'  : params,

  };

  res.write(JSON.stringify(resp, null, 2));
  res.end();
}

router.post('/', handlereq);
router.get('/', handlereq);

module.exports = router;
