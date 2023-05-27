import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const ticketCommentSchema = new Schema({
    content: String,
    ticket: String,
    user: String,
})

const TicketComment = mongoose.model('Token', ticketCommentSchema)

export default TicketComment
