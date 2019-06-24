var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const materialsTypesRoutes = require('./routers/material')
app.use(materialsTypesRoutes);

const clientTypesRoutes = require('./routers/client')
app.use(clientTypesRoutes);

const materialTypesRoutes = require('./routers/materialType')
app.use(materialTypesRoutes);

const countriesRoutes = require('./routers/countries')
app.use(countriesRoutes);

const getBankListRoutes =  require('./routers/getBankList')
app.use(getBankListRoutes);

const getClientRoutes =  require('./routers/getClient')
app.use(getClientRoutes);

const getIncotermRoutes = require('./routers/getIncoterm')
app.use(getIncotermRoutes);

const MeasuresRoutes = require('./routers/measures')
app.use(MeasuresRoutes);


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