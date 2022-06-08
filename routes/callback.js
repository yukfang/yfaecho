var express = require('express');
const Request = require('request');
var fs = require('fs');

const { head } = require('../app');
const app = require('../app');
var router = express.Router();

function handleCb(req, res, next) {
  if(req.query.indexOf('cbmonitor') == -1) {
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
    app.locals.cbdata = resp;

    res.write({code:0});
    res.end();
  } else {
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(app.locals.cbdata);
    res.end();
  }
}


function curlFileUpload(callback) {
  var curlCommand;
  curlCommand = 'curl -X PUT "https://yfadisk.scm.azurewebsites.net/api/vfs/site/wwwroot/bf/" --header "If-Match: *"  --header "Authorization: Basic ' +
    process.env.APPSETTING_FILE_UPLOAD_KEY + '" --upload-file "cbdata.txt"';
  var exec = require('child_process').exec;
  var child = exec(curlCommand);
  var contents = '';
  child.stdout.on('data', function(data) {
      contents += data;
      console.log(contents);
  });
  child.stderr.on('data', function(data) {
      //console.log('error: ' + data);
  });
  child.on('close', function(code) {
      try {
          contents = JSON.parse(contents);
      } catch(e) { }
      if ( callback ) {
          callback(contents);
      }
  });
};

router.post('/', handleCb);
router.get('/', handleCb);

module.exports = router;
