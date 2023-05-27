import { Router } from "express";
import {farmerRegister, farmerAuth} from "../Controllers/FarmerLoginController.js"



const router = Router();

router.post('/farmer-register', farmerRegister);
router.post('/farmer-login', farmerAuth);

export default router;