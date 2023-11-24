import express from "express";
import {
    createData,
    getDataByNik
} from "../controllers/NikController.js";

const router = express.Router();

// router.get('/products', getProducts);
router.get('/get-nik/:nik', getDataByNik);
router.post('/nik', createData);
// router.patch('/products/:id', updateProduct);

export default router;