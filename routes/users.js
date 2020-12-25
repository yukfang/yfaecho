var express = require('express');
var router = express.Router();

const https = require('https');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let request_call = new Promise((resolve, reject) => {
    https.get('https://www.google.com', (response) => {
      let chunks_of_data = [];
  
      response.on('data', (fragments) => {
        chunks_of_data.push(fragments);
      });
  
      response.on('end', () => {
        let response_body = Buffer.concat(chunks_of_data);
        
        // promise resolved on success
        resolve(response_body.toString());
      });
  
      response.on('error', (error) => {
        // promise rejected on error
        reject(error);
      });
    });
  });

  request_call.then((response) => {
    res.write(response);
    res.end();
  }).catch((error) => {
    console.log(error);
  });
 // res.writeHead(200, {'content-type': 'application/json'});
 // let msg = '2020';
 // res.write(msg);
 // res.end();
});

module.exports = router;
