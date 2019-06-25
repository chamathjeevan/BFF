var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/Company/clients', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Company_Client);
    request(url, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
})

module.exports = router;