import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from "./config.js";
import exhibitInfo from './models/exhibitInfoModel.js';

const app = express()

app.use(cors())

const PORT = 8000

//route to test connection to backend server
app.get('/test', (req, res) => {
    res.json("hello")
})

//route to GET all exhibit documents from the database 
app.get('/exhibits', async(req,res) => {
    try {
        const exhibits = await exhibitInfo.find({})
        console.log('GET /exhibits')
        res.status(200).json(exhibits)
    }catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
})

//route to POST - route that adds an exhibit document to the database 
app.post('/exhibits', async (req,res) =>{
    try { 
        console.log(req.body)
        const newExhibitInfo = await exhibitInfo.create(req.body)
        console.log("POST /exhibits")
        res.status(201).json(newExhibitInfo)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    connectDB()
})
