import { Schema } from 'mongoose'
import mongoose from 'mongoose'
const user = new Schema(
    {
        name: String,
        surname: String,
        email: String,
        phone: String,
        password: String,
        address: {
            type: String,
            default: null,
        },
        cardNumber: {
            type: String,
            default: null,
        },
        cardCvs: {
            type: String,
            default: null,
        },
        cardExpiredDate: {
            type: String,
            default: null,
        },
        cardHolder: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
)
const User = mongoose.model('User', user)
export default User
