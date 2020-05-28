const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log ('Unable to connect to MongoDB server');
  }
  console.log('connected to Mongodb server');

  var dbo = db.db("mydb");

  // dbo.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // },(err, result) => {
  //   if(err) {
  //     return console.log ('Unable to insert todo',err);
  //   }
     
  //   console.log(JSON.stringify(result.ops, undefined,2));    


  // })


dbo.collection('Users').insertOne({
  name: 'Mukesh',
  age: '23',
  location: 'USA' ,
  completed: false
},(err, result) => {
    if(err) {
      return console.log ('Unable to insert todo',err);
    }
     
    console.log(JSON.stringify(result.ops, undefined,2)); 



});


  db.close();

});