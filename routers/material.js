var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/material/Types', function (req, res, next) {
  var url = endpoints.Url(endpoints.Endpoints.Material_MaterialType);
  request(url, function (error, response, body) {
    res.send(body)
  });
});

module.exports = router;