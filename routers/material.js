var express = require('express');
const router = express.Router();
var request = require('request');

router.get('/material/Types', function(req, res, next) {
request('http://localhost:3010/45634/materialtype/', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred and handle it
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(body)
  });
});

module.exports = router;




