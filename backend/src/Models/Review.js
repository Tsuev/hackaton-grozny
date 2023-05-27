import { Schema, model } from 'mongoose'
const review = new Schema(
    {
        reviewText: String,
        user: String,
        farmer: String,
        product: String,
    },
    { timestamps: true }
)
const Review = model('Review', review)
export default Review
