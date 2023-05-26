import express from 'express'
import connect from './db/db.js'
import Dotenv from 'dotenv'
import categoryRouter from './Routers/CategoryRouter.js'
const app = express()
const port = 3000
connect()
Dotenv.config()



app.use(express.json())

app.use('/category', categoryRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
