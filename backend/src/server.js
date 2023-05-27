import express from 'express'

import connect from './db/db.js'

import userRoutes from './Routers/UserRoutes.js'
import farmerRoutes from './Routers/FarmerRoutes.js'
import categoryRouter from './Routers/CategoryRouter.js'
import basketRoutes from './Routers/BasketRoutes.js'
import deliveryTypes from './Routers/DeliveryTypeRoutes.js'
import productRoutes from './Routers/ProductRoutes.js'
import orderRoutes from './Routers/OrderRouter.js'
import path from "path";
import { fileURLToPath } from 'url';

import cors from 'cors'
import reviewRoutes from './Routers/ReviewRoutes.js'
import adminRoutes from './Routers/AdminRoutes.js'
const app = express()

const port = 3000

connect()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use('/uploads/images', express.static(path.join(__dirname, '/uploads/images')));
app.use(cors())

app.use('/api/category', categoryRouter)
app.use('/api', farmerRoutes)
app.use('/api', userRoutes)
app.use('/api', basketRoutes)
app.use('/api', deliveryTypes)
app.use('/api', productRoutes)
app.use('/api', orderRoutes)
app.use('/api', reviewRoutes)
app.use('/api', adminRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
