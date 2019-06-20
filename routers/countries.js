var express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/countries', function(req, res, next) {
    fs.readFile('resources/Countries.json', 'utf8', (err, countries) => {
        if (err) {
            return res.status(500).send(err);   
        }
        return res.status(200).send(countries)    
    }) 
})

module.exports = router;