

Suppliers:  ID, Client_ID, Company_NAME, CompanyInFold, NearestSeaPort, NearestAirPort, SeaTransitTime, AirTransitTime, SuppliersWebSite, LinkToCatalogues, Parent_ID, IsDecaseed, IsActive
Entities:  Name, Client_ID, Address, TIN, BusinessRegNo, Status
PaymentTerms: ID, Client_ID, Supplier_ID, PaymentTerm, DueDays, DueStartOn, PaymentType, Status
ContactDetails: ID, Company_NAME, ContactNo, Address, Email

Companies: Client_ID, NAME, Address
Clients: ID, ClientInfoID, Address, VAT, TIN, BusinessRegNo, Parent_ID, IsDeleted, IsActive, CreatedBy, CreatedTime

AffiliatedCompany: Client_ID, Incoterm_ID, PaymentTerm_ID, Company_NAME, Type, Bank, IsDeleted, IsActive

Banks: NAME, BusinessRegNo, TIN, SWIFT

Forwarders: ID, Client_ID, Company_NAME, TypeOfVendor, BusinessRegNo, TIN

Incoterms: ID, Incoterms, Description, Status


I have edited the ER diagram now. See if it makes sense @Chamath Jeevan. Affiliated company table is there  to represent connection with each companies. Not all clients can make orders from all the suppliers in the db. Only a set of suppliers can do business with certain clients. These relationships are defined with payment terms and inco terms. So we need to have this relationship information on some place. That is served by affiliated company table. @Shavin, @Chamath Correct me if I am wrng in business case I mentioned above
