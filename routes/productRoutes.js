import express from "express";

import {createProduct, deleteProduct, getAllProducts, getProductDetails, updateProducts} from "../controllers/productController.js";

const router=express.Router();

// Admin -- Route 
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProducts).delete(deleteProduct).get(getProductDetails);

export default router;