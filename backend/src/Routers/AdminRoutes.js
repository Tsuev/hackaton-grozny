import { Router } from 'express'
import { review } from '../Controllers/ReviewController.js'
import {
    acceptFarmer,
    getFarmerStatistic,
} from '../Controllers/AdminController.js'

const router = Router()

router.post('/accept-farmer', acceptFarmer)
router.get('/statistic-farmers', getFarmerStatistic)

export default router
