import { Router } from "express";
import {farmerRegister} from "../Controllers/FarmerLoginController.js"



const router = Router();

router.post('/farmer-register', farmerRegister);

export default router;