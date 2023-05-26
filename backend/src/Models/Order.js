import { Schema, model } from 'mongoose'
const order = new Schema(
    {
        userId: String,
        sum: Number,
        deliveryTypeId: String,
        paymentTypeId: String,
        deliveryAddress: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
)
const Order = model('Order', order)
export default Order
