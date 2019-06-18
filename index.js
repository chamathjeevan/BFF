var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const clientRoutes = require('./routers/material.js')
app.use(clientRoutes);

var intPostStartUp = function intPostStartUp() {
    // bind error middleware
    app.use(_ErrorMiddleware.ErrorMiddleware);
  };
  
  exports.intPostStartUp = intPostStartUp;

// set port
app.listen(3000, function() {
    console.log('Node app is running on port 3000');
});
module.exports = app;