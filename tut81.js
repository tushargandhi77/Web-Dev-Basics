// use database 
use harrykart

// create single database
db.items.insertOne({name:
"samsung 30s",price:
22000,rating:4.5,qty:
233,sold:98})

// check data base
db.items.find()?

// create Many database
db.items.insertMany([{name:
"samsung 30s",price:
22000,rating:4.5,qty:
233,sold:98},{name:
"karbon 30s",price:
2200,rating:3.5,qty:
233,sold:100},{name:
    "realme 30s",price:
    22000,rating:4.5,qty:
    233,sold:98}])
