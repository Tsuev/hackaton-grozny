import { defaultError, getUserByToken } from '../utils.js'
import BasketItem from '../Models/BasketItem.js'
import Basket from '../Models/Basket.js'

export const getBasket = async (req, res) => {
    const user = await getUserByToken(req)

    let basket = await Basket.findOne({ userId: user._id })
    if (!basket) {
        basket = Basket.create({
            userId: user._id,
            quantity: 0,
            totalSum: 0,
        })
    }
    return res.json({
        data: basket,
    })
}

export const addBasketItem = async (req, res) => {
    try {
        const { productId, basketId } = req.body
        const user = await getUserByToken(req)

        const existedBasketItem = BasketItem.findOne({ product: productId })
        if (existedBasketItem) {
            BasketItem.updateOne(
                { product: productId },
                {
                    quantity: existedBasketItem.quantity + 1,
                }
            )
        }

        const item = await BasketItem.create({
            product: productId,
            basketId: basketId,
            quantity: 1,
        })

        return res.json({
            basketItem: item,
        })
    } catch (error) {
        return defaultError(res, error)
    }
}
