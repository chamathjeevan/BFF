var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');


router.get('/material/Type', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_MaterialType);
    request(url, function (error, response, body) {
        if (error) {
        return res.status(500).send(error);   
      }
     return res.status(response.statusCode).send(body)
    });
})

router.get('/material/Type/:Id', function(req, res, next) {
    var url = endpoints.Url(endpoints.Endpoints.Material_MaterialType,req.params.id);
    request(url, function (error, response, body) {
        if (error) {
            return res.status(500).send(error);   
          }
         return res.status(response.statusCode).send(body)
    });
})

router.post('/material/Type/', function (req, res) {

    var url = endpoints.Url(endpoints.Endpoints.Material_MaterialType);

    request.post({
        headers: {'content-type' : 'application/json'},
        url:     url,
        json:   true,
        form:    req.body
      }, function(error, response, body){
            
        if (error) {
            return res.status(500).send(error);   
          }
         return res.status(response.statusCode).send(body)
    });
});
module.exports = router;