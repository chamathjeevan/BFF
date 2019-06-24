var express   = require('express');
const router  = express.Router();
var request   = require('request');
var endpoints = require('./endpoints');

router.get('/getBankList/', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_GetBankList);
    request(url, function(error, response, body) {
        res.status(response.statusCode).send(body);
    })
})

router.get('/getBankList/:name', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_GetBankList,req.params.name);
    request(url, function (error, response, body) {
        res.status(response.statusCode).send(body);
    }) 
})


module.exports = router;