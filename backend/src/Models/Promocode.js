import { Schema, model } from 'mongoose'
const promocode = new Schema(
    {
        discountPercent: Number,
        farmerId: String,
        activeUntil: String,
    },
    { timestamps: true }
)
const Promocode = model('Promocode', promocode)
export default Promocode
