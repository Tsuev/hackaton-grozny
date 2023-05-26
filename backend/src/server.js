import express from 'express'
import connect from './db/db.js'
import userRoutes from './Routers/UserRoutes.js'
const app = express()
const port = 3000
connect()

app.use('/api', userRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
