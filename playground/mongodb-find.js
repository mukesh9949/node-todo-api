const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log ('Unable to connect to MongoDB server');
  }
  console.log('connected to Mongodb server');

  var dbo = db.db("mydb");

  // dbo.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs , undefined, 2));
  // }, (err) => {
  //   console.log('Cannot find items in todos ',err);
  // });

  dbo.collection('Users').find({name: 'Mukesh'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs , undefined, 2));
  }, (err) => {
    console.log('Cannot find items in todos ',err);
  });
  // db.close();

});