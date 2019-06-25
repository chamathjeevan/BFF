var express = require('express');
const router = express.Router();
var request = require('request');
var endpoints = require('./endpoints');

router.get('/material', function (req, res, next) {

  var url = endpoints.Url(endpoints.Endpoints.Material_Material);

  request(url, function (error, response, body) {
      if (error) {
        return res.status(500).send(error);   
      }
     return res.status(response.statusCode).send(body)
    });
});

router.get('/material/:Id', function (req, res, next) {
  var url = endpoints.Url(endpoints.Endpoints.Material_Material);
  request(url, function (error, response, body) {
      if (error) {
        return res.status(500).send(error);   
      }
     return res.status(response.statusCode).send(body)
    });
});

router.post('/material/:Id', function(req, res, next) {
  dbConnection.query('INSERT INTO Material SET = ?'. req.body, function(error, results, fields) {
      if (error) return next (error);
      return res.status(201).send();
  })
})

router.put('/material/:Id', function(req, res) {
  let material = req.body;
  dbConnection.query('UPDATE Material SET ID = ?, ItemName = ?, ItemType = ? ,ItemOrigin = ?, UnitOfMeasure_ID = ?, HS_HsCode = ? ,RequiredApprovalTypes = ?, CargoType= ?, Trade_Agreement_Type_ID = ?, IsDeleted = ?, IsActive = ?, IsBOI = ?, Parent_ID = ?, Client_ID = ?, CreatedBy = ?, CreatedTime = ?', 
  [Material.ID, Material.ItemName, Material.ItemType, Material.ItemOrigin, Material.UnitOfMeasure_ID, Material.HS_HsCode, Material.RequiredApprovalTypes, Material.CargoType, Material.Trade_Agreement_Type_ID, Material.IsDeleted, Material.IsActive, Material.IsBOI, Material.Parent_ID, Material.Client_ID, Material.CreatedBy, Material.CreatedTime], function(error, results, fields) {
    if (error) return next(error);
    if (!results || results.affectedRows == 0) res.status(400).send();
    return res.send(results);
  } )
})


module.exports = router;