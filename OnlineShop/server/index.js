import dotenv from 'dotenv';
import connectToDatabese from './database.js'
import express from 'express';

// our routes

import productRoutes from './routes/productsRoutes.js';


dotenv.config();
connectToDatabese();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000

app.use('/api/products',productRoutes)

app.listen(port, () => {
    console.log(`server runs on port ${port}`)
})
