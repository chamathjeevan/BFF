var express = require('express');
const router = express.Router();
var dbConnection = require('./database')

router.get('/material/Types', function(req, res, next) {
    dbConnection.query('SELECT * FROM MaterialTypes ', function(error,results, fields) {
        if (error) return next(error);
        if (!results || results.length == 0 ) return res.status(404).send()
        return res.send(results)
    
    });
});

module.exports = router;