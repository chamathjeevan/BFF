var express = require('express');
const router = exprss.Router();
var request = require('/endpoints');
var endpoints = require ('/endpoints');

router.get ('/getIncoterm/', function(req, res, next) {
    var url = endpoints.url(endpoints.Endpoints.Company_Incoterm);
    request(url, function(error, response, body) {
        res.status(response.statusCode).send(body);

    })
})

router.get('/getIncoterm/:id', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Incoterm,req.params.id);
    request(url, function(error,  response, body) {
        res.status(response.statusCode).send(body);
    })
})

module.exports = router;