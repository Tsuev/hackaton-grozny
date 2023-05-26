import { Schema, model } from 'mongoose';
const product = new Schema({
    title: String,
    description: String,
    farmerId: String,
    categoryId: String,
    price: Number,
    discountPrice: {
        type: Number,
        default: null,
    },
    quantity: Number,
    image: {
        type: String,
        default: null,
    },
}, { timestamps: true });
const Product = model('Product', product);
export default Product;
