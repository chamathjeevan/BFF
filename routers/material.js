var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/material', function (req, res, next) {
  var url = endpoints.Url(endpoints.Endpoints.Material_Material);
  request(url, function (error, response, body) {
      if (error) {
        return res.status(500).send(error);   
      }
     return res.status(response.statusCode).send(body)
    });
});

router.get('/material/:Id', function (req, res, next) {
  var url = endpoints.Url(endpoints.Endpoints.Material_Material);
  request(url, function (error, response, body) {
      if (error) {
        return res.status(500).send(error);   
      }
     return res.status(response.statusCode).send(body)
    });
});

router.post('/material', function (req, res) {
  var url = endpoints.Url(endpoints.Endpoints.Material_Material);
  request.post({
      headers: {'content-type' : 'application/json'},
      url:     url,
      json:   true,
      form:    req.body
    }, function(error, response, body){
          if(!error){
              res.status(500).send(error);
          }else{
              res.status(response.statusCode).send(body);
          }
  });
});

router.put('/material', function (req, res) {
  var url = endpoints.Url(endpoints.Endpoints.Material_Material);
  request.put({
      headers: {'content-type' : 'application/json'},
      url:     url,
      json:   true,
      form:    req.body
    }, function(error, response, body){
          if(!error){
              res.status(500).send(error);
          }else{
              res.status(response.statusCode).send(body);
          }
  });
});

module.exports = router;