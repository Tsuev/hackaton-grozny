import { Router } from "express";
import { addProduct } from "../Controllers/ProductController.js";

const router = Router();


router.post('/add-product', addProduct)

export default router;