var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');


router.get('/material/Type', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_MaterialType);
    request(url, function (error, response, body) {
      res.status(response.statusCode).send(body);
    });
})

router.get('/material/Type/:Id', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_MaterialType,req.params.id);
    request(url, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
})



module.exports = router;

