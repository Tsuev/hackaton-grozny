import { Schema, model } from 'mongoose'
const order = new Schema(
    {
        userId: String,
        sum: Number,
    },
    { timestamps: true }
)
const Order = model('Order', order)
export default Order
