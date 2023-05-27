import { getUserByToken } from '../utils.js'
import Product from '../Models/Product.js'
import Review from '../Models/Review.js'

export const review = async (req, res) => {
    let { reviewText, product } = req.body

    const user = await getUserByToken(req)
    if (!user) {
        return res.status(500).json({ message: 'No User provided' })
    }

    const productModel = await Product.findOne({ _id: product })

    if (productModel) {
        const review = await Review.create({
            reviewText: reviewText,
            product,
            farmer: productModel.farmerId,
            user: user._id,
        })
        res.json({
            data: review,
        })
    }
}
