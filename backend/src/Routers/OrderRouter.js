import { Router } from 'express'
import {
    addCategory,
    getCategories,
} from '../Controllers/CategoryController.js'
import { createOrder, getOrders } from '../Controllers/OrderController.js'
import OrderProduct from '../Models/OrderProduct.js'
import Order from '../Models/Order.js'

const router = Router()

router.get('/orders', getOrders)
router.post('/order/create', createOrder)

export default router