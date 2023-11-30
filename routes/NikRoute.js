import express from "express";
import {
    createData,
    getDataByNik,
    getDataByPhone
} from "../controllers/NikController.js";

const router = express.Router();

// router.get('/products', getProducts);
router.get('/get-nik/:nik', getDataByNik);
router.get('/get-phone/:phone', getDataByPhone);
router.post('/nik', createData);
// router.patch('/products/:id', updateProduct);

export default router;