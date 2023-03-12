use harrykart
show collections

db.items.find({rating:3.5})
db.items.find({rating:{$gte:3.5}})

db.items.find({rating:{$gt:3.5},price:{$gt:4000}})

db.items.find({$or:[{rating:{$gt:3.5},price:{$gt:4000}}]})


db.items.find({rating:{$gt:3.5}},{rating:1})


// Deleting
db.items.deleteOne({price:2200})

db.items.updateMany({name:"karbon 30s"},{$set:{price:20}})