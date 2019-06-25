var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/material/mesures', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_Mesure);
    request(url, function (error, response, body) {
        if(!error){
            res.status(response.statusCode).send(error);
        }else{
            res.status(response.statusCode).send(body);
        }
    });
})

router.get('/material/mesure/:id', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_Mesure,req.params.id);
    request(url, function (error, response, body) {
        if(!error){
            res.status(response.statusCode).send(error);
        }else{
            res.status(response.statusCode).send(body);
        }
    });
})

router.post('/material/mesure/', function (req, res) {
    var url = endpoints.Url(endpoints.Endpoints.Material_Mesure);
    console.error(url);
    console.error('X1');
    request.post({
        headers: {'content-type' : 'application/json'},
        url:     url,
        json:   true,
        form:    req.body
      }, function(error, response, body){
            console.error('X2');
            console.error(response);
            if(!error){
                res.status(response.statusCode).send(error);
            }else{
                res.status(response.statusCode).send(body);
            }
    });
});
module.exports = router;