import { Schema, model } from 'mongoose'
const orderProduct = new Schema(
    {
        product: String,
        orderId: String,
        price: Number,
    },
    { timestamps: true }
)
const OrderProduct = model('OrderProduct', orderProduct)
export default OrderProduct
