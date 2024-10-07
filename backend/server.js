import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from "./config.js";
import exhibitInfo from './models/exhibitInfoModel.js';

const app = express()

app.use(cors())

const PORT = 8000

app.get('/test', (req, res) => {
    res.json("hello")
})

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



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    connectDB()
})
