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

//route to DELETE an exhibit by id
app.delete("/exhibits/:id", async (req,res) => {
    try {
        const deletedExhibit= await ExhibitInfo.findByIdAndDelete(req.params.id)
        console.log(deletedExhibit)
        console.log("DELETE /exhibits/:id")
        res.status(200).json(deletedExhibit)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
})

//route to EDIT/UPDATE an exhibit by id 
app.put('/exhibits/:id', async (req,res) => {
    try{
        const editedExhibit = await ExhibitInfo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(editedExhibit)
        console.log("PUT /exhibits/:id")
        res.status(200).json(editedExhibit)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
})

//route to GET one exhibit document by id 
app.get('/exhibits/:id', async(req,res) => {
    try {
        const exhibit = await ExhibitInfo.findById(req.params.id)
        console.log('GET /exhibits/:id')
        res.status(200).json(exhibit)
    }catch(e) {
        console.log(e)
        res.status(400).json(e)
        //getting to here now 
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    connectDB()
})
