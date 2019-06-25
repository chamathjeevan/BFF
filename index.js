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

const materialsRoutes = require('./routers/material')
app.use(materialsRoutes);

const countriesRoutes = require('./routers/countries')
app.use(countriesRoutes);

const getBankListRoutes =  require('./routers/getBankList')
app.use(getBankListRoutes);

<<<<<<< HEAD
const getClientRoutes =  require('./routers/getClient')
app.use(getClientRoutes);

const getIncotermRoutes = require('./routers/getIncoterm')
app.use(getIncotermRoutes);
=======
//const getClientRoutes =  require('/routers/getClient')
//app.use(getClientRoutes);

//const getIncotermRoutes = require('/routers/getIncoterm')
//app.use(getIncotermRoutes);
>>>>>>> a4755ed72c3816196c3d9d895ba8288148bef63a

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