import { defaultError, getUserByToken } from '../utils.js'
import BasketItem from '../Models/BasketItem.js'
import Basket from '../Models/Basket.js'
import Product from '../Models/Product.js'
import BasketSubscription from '../Models/BasketSubscription.js'

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
        let i = 0
        while (i < items.length) {
            const product = await Product.findOne({ _id: items[i].product })
            basket.basketItems[i] = {
                product: product,
                quantity: items[i].quantity,
                _id: items[i]._id,
            }
            basket.quantity += items[i].quantity
            basket.totalSum += product.discountPrice ?? product.price
            basket.basketItems[i].product = product
            i++
        }
    }
    return res.json({
        data: basket,
    })
}

export const addBasketItem = async (req, res) => {
    try {
        const { product, basketId } = req.body
        console.log('product basket id', req.body)
        const user = await getUserByToken(req)
        const existedBasketItem = await BasketItem.findOne({
            product,
            basketId,
        })
        if (existedBasketItem) {
            const updated = await BasketItem.updateOne(
                { product, basketId },
                {
                    quantity: existedBasketItem.quantity + 1,
                }
            )
            return res.json({
                result: 'success',
            })
        } else {
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

export const deleteBasketItem = async (req, res) => {
    try {
        const { basketItem } = req.body

        const result = await BasketItem.deleteOne({ _id: basketItem })

        return res.json({
            success: true,
        })
    } catch (error) {
        return defaultError(res, error)
    }
}

export const addBasketSubscription = async (req, res) => {
    const { basketId, startPeriod, activatePeriodDays } = req.body

    const user = await getUserByToken(req)

    if (user) {
        const subscription = BasketSubscription.create({
            userId: user._id,
            basketId,
            startPeriod,
            activatePeriodDays,
        })
    }
}
