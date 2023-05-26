import { Schema, model } from 'mongoose'
const basketItem = new Schema(
    {
        product: String,
        BasketId: String,
        quantity: Number,
    },
    { timestamps: true }
)
const BasketItem = model('BasketItem', basketItem)

export default BasketItem
