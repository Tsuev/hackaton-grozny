import { Router } from "express";
import {addCategory, getCategories} from "../Controllers/CategoryController.js"



const router = Router();

router.get('/getCategories', getCategories);
router.post('/addCategory', addCategory);

export default router;