import { Collection, MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
// const dbName = 'myProject';

async function dbconnect() {
 await client.connect();
 console.log("Database Connected");

//  var list = await client.db().admin().listDatabases();
//  console.log(list);

    const db = client.db('sd_hub');
    const collection = db.collection('students');
    var docs = await collection.find({}).toArray();
    console.log(docs);
    collection.insertMany([
        {studentID:31,name:'Yousuf', age:22, number:2122154789, email: 'yousuf@sdhub.com'},
        {studentID:23, name:'Talha', age:20, number:1234567890, email:"talha@sdhub.com"},
        {studentID:22, name: 'Ibrahim', age: 25, number:3216549873, email:'ibrahim@sdhub.com'}
    ]);

    return 'done';
}



async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }


  dbconnect();
