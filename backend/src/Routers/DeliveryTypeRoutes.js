import { Router } from "express";
import { addType, getTypes } from "../Controllers/DeliveryTypeController.js";

const router =  Router();


router.post('/add-type', addType)
router.get('/get-types', getTypes)

export default router;