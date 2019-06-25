var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/material/hscode' , function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_HS);
    request(url, function( error, response, body) {
        if(!error){
              res.status(50).send(error);
          }else{
              res.status(response.statusCode).send(body);
          }

    })
})

router.get('/material/hscode/:Id' , function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_HS,req.params.Id);
    request(url, function(error, response, body) {
        if(!error){
              res.status(500).send(error);
          }else{
              res.status(response.statusCode).send(body);
          }
    })
})


router.post('/material/hscode', function (req, res) {
    var url = endpoints.Url(endpoints.Endpoints.Material_HS);
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
  
  router.put('/material/hscode', function (req, res) {
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

