import express from 'express'
import connect from './db/db.js'
import Dotenv from 'dotenv'
const app = express()
const port = 3000
connect()
Dotenv.config()
app.get('/', (req, res) => {
    res.send('Hello 12121212')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
