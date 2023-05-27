import { Router } from 'express'
import {
    addCategory,
    getCategories,
} from '../Controllers/CategoryController.js'
import { createOrder, getOrders, getOrderByFarmer } from '../Controllers/OrderController.js'

const router = Router()

router.get('/orders', getOrders)
router.post('/order/create', createOrder)
router.get('/order/get-order-by-farmer', getOrderByFarmer)

export default router
