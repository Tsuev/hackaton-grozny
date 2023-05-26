import { Schema, model } from 'mongoose'
const deliveryType = new Schema(
    {
        title: String,
    },
    { timestamps: true }
)
const DeliveryType = model('DeliveryType', deliveryType)
export default DeliveryType
