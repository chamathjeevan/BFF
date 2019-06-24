const MATERIAL_SERVICE_DOMAIN = 'http://localhost:3010';
const COMPANY_SERVICE_DOMAIN = 'http://localhost:3020';

const Endpoints = {
    Material_HS: '/:Client_ID/hs/',
    Material_Incoterm: '/:Client_ID/incoterm/',
    Material_Material: '/:Client_ID/material/',
    Material_MaterialType: '/:Client_ID/materialtype/',
    Material_RecepieMap: '/:Client_ID/recepiemap',
    Material_RegApproval: '/:Client_ID/regapproval',
    Material_Supplier: '/:Client_ID/supplier/',
    Material_TaxMap: '/:Client_ID/taxmap/',
    Material_TradeAgreementType: '/:Client_ID/tradeagreementtype/',
    Material_Measures: '/:Client_ID/mesure/',
    Company_Affiliated: '/affiliated',
    Company_Bank: '/bank',
    Company_Client: '/client',
    Company_Company: '/company',
    Company_Entity: '/entity',
    Company_Incoterm: '/incoterm',
    Company_PaymentTerm: '/paymentTerm',
    Company_Supplier: '/supplier'
};

module.exports.Endpoints = Endpoints;

module.exports.Url = function (endpoint, ids) {

    var clientID = "1"
    var url =  Domain(endpoint) + endpoint.replace(":Client_ID", clientID);

    if (ids !== null && typeof ids !== 'undefined') {
        url = url + ids;
    }
    console.debug('URL --> ' + url)

    return url;
}

var Domain = function (endpoint) {
    switch(endpoint) {
        case Endpoints.Material_HS:
        case Endpoints.Material_Incoterm:
        case Endpoints.Material_Material:
        case Endpoints.Material_MaterialType:
        case Endpoints.Material_RecepieMap:
        case Endpoints.Material_RegApproval:
        case Endpoints.Material_Supplier:
        case Endpoints.Material_TaxMap:
        case Endpoints.Material_TradeAgreementType:
        case Endpoints.Material_Measures:

        case Endpoints.Company_GetBankList:
        case Endpoints.Company_GetClient:
        case Endpoints.Company_GetIncoterm:

        
            return MATERIAL_SERVICE_DOMAIN;
        default:
          return COMPANY_SERVICE_DOMAIN
      }
}