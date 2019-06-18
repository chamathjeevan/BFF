var express = require('express');
const router = express.Router();
var dbConnection = require('./database')
const Joi = require('@hapi/joi');


router.get('/materialTypes', function(req, res, next) {
    dbConnection.query('SELECT * FROM MaterialTypes', function(error, results, fields) {
       if (error) return next (error);
       if (!results||results.length == 0) return res.status(404).send()
       return res.send(results)

    })
})

router.get ('/materialTypes/:id', function(req, res, next) {
    let id = req.params.id;
    dbConnection.query('SELECT * FROM MaterialTypes WHERE ID', function(error, results, fields) {
        if (error) return next(error);
        if (!results||results.length ==0) return res.status(404).send()
        return res.status(results)
    })
})

const fetch = require("node-fetch");

router.get('/materialTypes/:id', function(req, res, next) {
    let id = req.params.uid;
    fetch('localhost:3000/:id').then(res => res.json()).then(function(data){
        returned = data.json();
        console.log(returned);
    })
})

module.exports = router;