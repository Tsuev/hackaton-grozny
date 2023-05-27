import { Router } from 'express'
import { review } from '../Controllers/ReviewController.js'

const router = Router()

router.post('/add-review', review)

export default router
