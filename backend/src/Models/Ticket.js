import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const ticketSchema = new Schema({
    title: String,
    user: String,
})

const Ticket = mongoose.model('Ticket', ticketSchema)

export default Ticket
