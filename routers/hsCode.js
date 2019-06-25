var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/hsCode/:hscode' , function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_HS);
    request(url, function( error, response, body) {
        res.status(response.statusCode).send(body);

    })
})

router.get('/hsCode/:hscode' , function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_HS,req.params.hscode);
    request(url, function(error, response, body) {
        res.status(response.statusCode).send(body);
    })
})


router.put('/hsCode/:hscode', function(req, res) {
    let hsCode = req.body;
    dbConnection.query('UPDATE Hs SET HsCode = ?, ClientName = ?, Priority = ?', [Hs.HsCode, Hs.ClientName, Hs.Priority] , function(error, results, fields) {
        if (error) return next(error);
        if (!results || results.affectedRows == 0) res.status(400).send();
        return res.send(results);

    } )
}) 

router.post('/hsCode/:hscode', function(req, res) {
    dbConnection.query('INSERT INTO Hs SET = ? ', req.body, function (error, results, fields) {
        if (error) return next (error);
        return res.status(201).send();
    })
})

module.exports = router;

