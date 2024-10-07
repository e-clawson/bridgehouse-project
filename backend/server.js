import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from "./config.js";
import ExhibitInfo from './models/exhibitInfoModel.js';

const app = express()

app.use(cors())

app.use(express.json())

const PORT = 8000

//route to test connection to backend server
app.get('/test', (req, res) => {
    res.json("hello")
})

//route to GET all exhibit documents from the database 
app.get('/exhibits', async(req,res) => {
    try {
        const exhibits = await ExhibitInfo.find({})
        console.log('GET /exhibits')
        res.status(200).json(exhibits)
    }catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
})

//route to POST - route that creates and adds an axhibit to the DB  
app.post('/exhibits', async (req,res) =>{
    try { 
        console.log(req.body)
        const newExhibitInfo = await ExhibitInfo.create(req.body)
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
