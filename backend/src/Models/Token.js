import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const tokenSchema = new Schema({
    token: String,
    user: String,
})

const Token = mongoose.model('Token', tokenSchema)

export default Token
