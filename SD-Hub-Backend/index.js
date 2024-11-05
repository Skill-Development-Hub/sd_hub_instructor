import express from 'express';
import { Collection, MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
await client.connect();
console.log("Database Connected");
const db = client.db('sd_hub');
const collection = db.collection('students');


app.post('/bulkStudents', async (req, res) => {
    console.log(req.body);
    const inserted = await collection.insertMany([req.body]);
    console.log(inserted);
    // const newStudent = new Students(req.body);
    // await newStudent.save();
    res.status(201).json(inserted);
})

app.post('/singleStudent', async (req, res) => {
    console.log(req.body);
    const inserted = await collection.insertOne(req.body);
    console.log(inserted);
    // const newStudent = new Students(req.body);
    // await newStudent.save();
    res.status(201).json(inserted);
})


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})