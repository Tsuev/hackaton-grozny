import { Router } from "express";

import { addProduct, getProduct, getProductByCategory, getProductByFarmer } from "../Controllers/ProductController.js";

const router = Router();


router.post('/add-product', addProduct)
router.get('/get-product', getProduct)
router.get('/get-product-by-category', getProductByCategory)
router.get('/get-product-by-farmer', getProductByFarmer)

export default router;