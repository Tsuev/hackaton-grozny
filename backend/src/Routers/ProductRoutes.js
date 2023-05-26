import { Router } from "express";

import { addProduct, getProduct, getProductByCategory } from "../Controllers/ProductController.js";

const router = Router();


router.post('/add-product', addProduct)
router.get('/get-product', getProduct)
router.get('/get-product-category', getProductByCategory)

export default router;