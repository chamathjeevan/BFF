var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');

  next();
});
const clientTypesRoutes = require('./routers/client')
app.use(clientTypesRoutes);

const materialTypesRoutes = require('./routers/materialType')
app.use(materialTypesRoutes);

const mesureRoutes = require('./routers/mesure')
app.use(mesureRoutes);

const countriesRoutes = require('./routers/countries')
app.use(countriesRoutes);

const getBankListRoutes = require('./routers/bannk')
app.use(getBankListRoutes);

const materialsRoutes = require('./routers/material')
app.use(materialsRoutes);

const clientRoutes = require('./routers/client')
app.use(clientRoutes);

const incotermRoutes = require('./routers/Incoterm')
app.use(incotermRoutes);


var intPostStartUp = function intPostStartUp() {
  // bind error middleware
  app.use(_ErrorMiddleware.ErrorMiddleware);
};

exports.intPostStartUp = intPostStartUp;

// set port
app.listen(3000, function () {
  console.log('Node app is running on port 3000');
});
module.exports = app;