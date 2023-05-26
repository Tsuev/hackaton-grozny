import { Router } from 'express'
import { userAuth, userRegister } from '../Controllers/LoginController.js'
import { userSaveCard } from '../Controllers/UserController.js'
import { addBasketItem, getBasket } from '../Controllers/BasketController.js'

const router = Router()

router.get('/basket', getBasket)
router.post('/basket/add', addBasketItem)

export default router
