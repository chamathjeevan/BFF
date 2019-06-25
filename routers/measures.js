var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/measures', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_Measures);
    request(url, function (error, response, body) {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(response.statusCode).send(body)
    })
})

router.get('/measures/:ID', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_Measures);
    request(url, function (error, response, body) {
        if (error) {
            return res.status(500).send(error);

        }
        return res.status(response.statusCode).send(body)
    })
})

router.post('/measures/:ID', function(req, res, next) {
    dbConnection.query('INSERT INTO UnitOfMesures SET = ?' , req.body, function(error, results, fields) {
        if (error) return next (error);
        return res.status(201).send();
    
    })
})

module.exports = router;