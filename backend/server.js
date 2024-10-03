import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors())

const PORT = 8000

app.get('/test', (req, res) => {
    res.json("hello")
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
