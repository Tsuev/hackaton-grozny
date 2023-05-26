import { Schema, model } from 'mongoose'
const basket = new Schema(
    {
        userId: String,
        quantity: Number,
        totalSum: Number,
        basketItems: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
)
const Basket = model('Basket', basket)

export default Basket
