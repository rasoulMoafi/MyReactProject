import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    title: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
},
    { timestamps: true })



const productsSchemea = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    reviews: { reviewSchema },
    rating: { type: Number, required: true, default: 0 },
    numberOfReviews: { type: Number, required: true, default: 0 },
    stock: { type: Number, required: true },
    productIsNew: { type: Boolean, default: false }
},
    { timestamps: true });



const product = mongoose.model('product', productsSchemea)

export default product;