import { Schema, model } from 'mongoose'
const deliveryType = new Schema(
    {
        title: String,
        isSelfPickup: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)
const DeliveryType = model('DeliveryType', deliveryType)
export default DeliveryType
