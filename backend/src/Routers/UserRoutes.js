import { Router } from 'express'
import { userAuth, userRegister } from '../Controllers/LoginController.js'
import { userSaveCard } from '../Controllers/UserController.js'

const router = Router()

router.post('/user/login', userAuth)
router.post('/user/register', userRegister)
router.post('/user/save-card', userSaveCard)

export default router
