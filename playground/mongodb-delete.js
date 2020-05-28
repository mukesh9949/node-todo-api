const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log ('Unable to connect to MongoDB server');
  }
  console.log('connected to Mongodb server');

  var dbo = db.db("mydb");

  // dbo.collection('Users').deleteMany({name : 'Mukesh'}).then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs , undefined, 2));
  // }, (err) => {
  //   console.log('Cannot find items in todos ',err);
  

  // });

  dbo.collection('Users').findOneAndDelete({_id : new ObjectID("5ecf2a6dc4e69afa671f7a1b")}).then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs , undefined, 2));
    }, (err) => {
      console.log('Cannot find items in todos ',err);
    
  
    });
});

