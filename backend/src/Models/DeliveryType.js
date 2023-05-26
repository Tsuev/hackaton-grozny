import { Schema, model } from 'mongoose'
const deliveryType = new Schema(
    {
        title: String,
    }
)
const DeliveryType = model('DeliveryType', deliveryType)
export default DeliveryType
