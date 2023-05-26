import { defaultError, getUserByToken } from '../utils.js'
import BasketItem from '../Models/BasketItem.js'
import Basket from '../Models/Basket.js'
import Product from '../Models/Product.js'

export const getBasket = async (req, res) => {
    const user = await getUserByToken(req)
    let basket
    const cartId = req.query.id
    if (cartId !== 'undefined' && cartId !== 'null') {
        basket = await Basket.findOne({ _id: cartId })
    } else if (user) {
        basket = await Basket.findOne({ userId: user?._id })
    }
    if (!basket) {
        basket = await Basket.create({
            userId: user?._id,
            quantity: 0,
            totalSum: 0,
        })
        basket.basketItems = []
    } else {
        const items = await BasketItem.find({ basketId: basket._id })
        basket.basketItems = items.map(async (item) => {
            return {
                ...item,
                product: await Product.findOne({ _id: item.product }),
            }
        })
    }
    return res.json({
        data: basket,
    })
}

export const addBasketItem = async (req, res) => {
    try {
        const { product, basketId } = req.body
        const user = await getUserByToken(req)

        const existedBasketItem = BasketItem.findOne({ product })
        if (existedBasketItem) {
            BasketItem.updateOne(
                { product: product },
                {
                    quantity: existedBasketItem.quantity + 1,
                }
            )
        }

        const item = await BasketItem.create({
            product: product,
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
