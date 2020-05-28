const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log ('Unable to connect to MongoDB server');
  }
  console.log('connected to Mongodb server');

  var dbo = db.db("mydb");

  dbo.collection('Users').findOneAndUpdate({_id:new ObjectID("5ecf2a1ac4e69afa671f79f0") },
  {
  $set: {
    name: 'Mourya'

  },


  $inc: {
    age: 1
  }
},
{
  returnOriginal: false}).then((result) => {
    console.log(result);
  });

});
