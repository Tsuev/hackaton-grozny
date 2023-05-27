import { Router } from 'express'
import {
    farmerRegister,
    farmerAuth,
} from '../Controllers/FarmerLoginController.js'
import { addPromocode } from '../Controllers/PromoController.js'

const router = Router()

router.post('/farmer-register', farmerRegister)
router.post('/farmer-login', farmerAuth)
router.post('/farmer/add-promo', addPromocode)

export default router
