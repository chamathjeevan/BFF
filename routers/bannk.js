var express   = require('express');
const router  = express.Router();
var request   = require('request');
var endpoints = require('./endpoints');

router.get('/Company/bank/', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Bank);
    request(url, function(error, response, body) {
        if(!error){
            res.status(500).send(error);
        }else{
            res.status(response.statusCode).send(body);
        }
    })
})

router.get('/Company/bank/:name', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Bank,req.params.name);
    request(url, function (error, response, body) {
        if(!error){
            res.status(500).send(error);
        }else{
            res.status(response.statusCode).send(body);
        }
    }) 
})

router.post('/Company/bank', function (req, res) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Bank);
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
  
  router.put('/Company/bank', function (req, res) {
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