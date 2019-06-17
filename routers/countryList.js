var express = require('express');
const router = express.Router();
var dbConnection = require('./database')
const Joi = require('@hapi/joi');

//COUNTRY DATABASE NAME; COUNTRYLIST TABLE NAME; CountryName colum name

const schema =  Joi.object().keys({
        CountryName: Joi.string().required(), //dbcolum country name

})

router.get('/countryList', function(req, res, next) {
    dbConnection.query('SELECT * FROM COUNTRYLIST', function (error, results, fields) {
        
        if (error) return next (error);
        if (!results||results.length == 0) return res.status(404).send()
        return res.send(results)
    })
})


router.get('/countryList', function(req, res , next) {
    let name = req.params.name;
    dbConnection.query('SELECT * FROM COUNTRYLIST WHERE CountryName', function(error, results, fields) {
        if (error) return next (error);
        if (!results||results.length == 0) return res.status(404).send()
        return res.send(results)
    })
})



