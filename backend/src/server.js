import express from 'express'
import connect from './db/db.js'
import userRoutes from './Routers/UserRoutes.js'
import categoryRouter from './Routers/CategoryRouter'
import basketRoutes from './Routers/BasketRoutes'

const app = express()
const port = 3000
connect()

app.use(express.json())

app.use('/api/category', categoryRouter)
app.use('/api', userRoutes)
app.use('/api', basketRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
