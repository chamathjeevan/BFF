var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/material', function (req, res, next) {
  var url = endpoints.Url(endpoints.Endpoints.Material_Material);
  request(url, function (error, response, body) {
      if (error) {
        return res.status(response.statusCode).send(error);   
      }
      return res.status(200).send(body)
    });
});

router.get('/material', function (req, res, next) {
  var url = endpoints.Url(endpoints.Endpoints.Material_Material);
  request(url, function (error, response, body) {
      if (error) {
        return res.status(response.statusCode).send(error);   
      }
      return res.status(200).send(body)
    });
});


module.exports = router;