import { Router } from 'express'
import {
    addCategory,
    getCategories,
} from '../Controllers/CategoryController.js'
<<<<<<< HEAD
import { createOrder, getOrders, getOrderByFarmer } from '../Controllers/OrderController.js'
=======
import { createOrder, getOrders } from '../Controllers/OrderController.js'
import OrderProduct from '../Models/OrderProduct.js'
import Order from '../Models/Order.js'
>>>>>>> e1dbe844bf0c979122d321720c3007d31136ac63

const router = Router()

router.get('/orders', getOrders)
router.post('/order/create', createOrder)
router.get('/order/get-order-by-farmer', getOrderByFarmer)

export default router
