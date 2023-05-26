import { Schema, model } from 'mongoose'
const order = new Schema(
    {
        userId: {
            type: String,
            default: null,
        },
        sum: Number,
        deliveryTypeId: String,
        deliveryAddress: String,
    },
    { timestamps: true }
)
const Order = model('Order', order)
export default Order
