import { Router } from "express";
import fileService from "../Services/fileService.js"
import { addProduct, getProduct, getProductByCategory, getProductByFarmer, addProdImage } from "../Controllers/ProductController.js";

const router = Router();

router.post('/add-product-image', fileService.any(), addProdImage);
router.post('/add-product', addProduct)
router.get('/get-product', getProduct)
router.get('/get-product-by-category', getProductByCategory)
router.get('/get-product-by-farmer', getProductByFarmer)

export default router;