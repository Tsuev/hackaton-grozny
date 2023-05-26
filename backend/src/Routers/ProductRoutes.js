import { Router } from "express";
import { addProduct, getProduct } from "../Controllers/ProductController.js";

const router = Router();


router.post('/add-product', addProduct)
router.get('/get-product', getProduct)

export default router;