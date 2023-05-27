import { Schema } from 'mongoose'
import mongoose from 'mongoose'
const admin = new Schema({
    name: String,
    email: String,
    password: String,
})
const Admin = mongoose.model('Admin', admin)
export default Admin
