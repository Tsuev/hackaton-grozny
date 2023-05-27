import Farmer from '../Models/Farmer.js'
import { defaultError } from '../utils.js'
import Review from '../Models/Review.js'

export const acceptFarmer = async (req, res) => {
    const id = req.query.id

    if (id) {
        try {
            const farmer = await Farmer.updateOne(
                { _id: id },
                { isAccepted: true }
            )
            return res.json({ success: true })
        } catch (e) {
            defaultError(e)
        }
    }
}

export const getFarmerStatistic = async (req, res) => {
    const farmers = await Farmer.find().lean()
    const result = []
    for (let i = 0; i < farmers.length; i++) {
        const reviews = await Review.find({ farmer: farmers[i]._id })
        result.push({
            reviewsCount: reviews.length ?? 0,
            rating: farmers[i].rating,
        })
    }

    return res.json({
        data: result,
    })
}
