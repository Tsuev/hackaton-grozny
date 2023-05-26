import { Schema, model } from 'mongoose'
const basketSubscription = new Schema(
    {
        userId: String,
        basketId: String,
        activatePeriodDays: Number,
        startDate: String,
    },
    { timestamps: true }
)
const BasketSubscription = model('BasketSubscription', basketSubscription)

export default BasketSubscription
