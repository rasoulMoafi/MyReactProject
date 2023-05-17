import express from 'express';
import product from '../models/products.js';
const productRoutes = express.Router();


const getProducts = async (req, res) => {
    const products = await product.find({});
    res.json(products)
};

productRoutes.route('/').get(getProducts);


export default productRoutes;