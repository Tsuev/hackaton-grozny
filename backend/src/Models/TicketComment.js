import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const ticketCommentSchema = new Schema({
    content: String,
    ticketId: String,
    userId: String,
})

const TicketComment = mongoose.model('Token', ticketCommentSchema)

export default TicketComment
