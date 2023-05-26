import { Schema, model } from 'mongoose'
const basket = new Schema(
    {
        userId: String,
        quantity: Number,
        totalSum: Number,
    },
    { timestamps: true }
)
const Basket = model('Basket', basket)

export default Basket
