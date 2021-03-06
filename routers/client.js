var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/Company/clients', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Client);
    request(url, function (error, response, body) {
        if(!error){
            res.status(500).send(error);
        }else{
            res.status(response.statusCode).send(body);
        }
    });
})

router.get('/Company/clients/:Id' , function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Client,req.params.Id);
    request(url, function(error, response, body) {
        if(!error){
              res.status(500).send(error);
          }else{
              res.status(response.statusCode).send(body);
          }
    })
})


router.post('/Company/clients', function (req, res) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Client);
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
  
  router.put('/Company/clients', function (req, res) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Client);
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