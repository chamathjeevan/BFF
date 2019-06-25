var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require ('./endpoints');

router.get ('/Company/incoterm/', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Incoterm);
    request(url, function(error, response, body) {
       if(!error){
                res.status(500).send(error);
            }else{
                res.status(response.statusCode).send(body);
            }

    })
})

router.get('/Company/incoterm/:id', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Incoterm,req.params.id);
    request(url, function(error,  response, body) {
       if(!error){
                res.status(500).send(error);
            }else{
                res.status(response.statusCode).send(body);
            }
    })
})


router.post('/Company/incoterm/', function (req, res) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Incoterm);
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
router.put('/Company/incoterm/', function (req, res) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Incoterm);
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