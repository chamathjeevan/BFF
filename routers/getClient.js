var express  =  require('express');
const router =  express.Router();
var request = require('request');
var endpoints = require ('/endpoints');

router.get('/getClient/', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_GetClient);
    request(url, function(error, response, body) {
        res.status(response.statusCode).send(body);

    })
})

router.get('/getClient/:id', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_GetClient,req.params.id);
    request(url, function(error, response, body) {
        res.status(response.statusCode).send(body);
    })
})


module.exports = router;