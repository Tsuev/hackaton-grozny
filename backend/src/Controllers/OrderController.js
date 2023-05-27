import Basket from '../Models/Basket.js'
import BasketItem from '../Models/BasketItem.js'
import Product from '../Models/Product.js'
import Order from '../Models/Order.js'
import { defaultError, getUserByToken } from '../utils.js'
import OrderProduct from '../Models/OrderProduct.js'

export const getOrders = async (req, res) => {
    const orders = await Order.find().lean()
    const result = []
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i]
        const orderProducts = await OrderProduct.find({
            orderId: order._id,
        }).lean()
        const resultProducts = []
        for (let j = 0; j < orderProducts.length; j++) {
            resultProducts[j] = {
                ...orderProducts[j],
                product: await Product.findOne({
                    _id: orderProducts[j].product,
                }),
            }
        }
        result[i] = {
            ...order,
            orderProducts: resultProducts,
        }
    }

    return res.json({ data: result })
}

export const createOrder = async (req, res) => {
    const { basketId, deliveryTypeId, address } = req.body

    const basket = await Basket.findOne({ _id: basketId })
    if (basket) {
        const items = await BasketItem.find({ basketId: basket._id }).lean()
        const basketItems = []
        for (let i = 0; i < items.length; i++) {
            basketItems[i] = {
                ...items[i],
                product: await Product.findOne({ _id: items[i].product }),
            }
        }

        const user = await getUserByToken(req)

        const sum = basketItems.reduce(
            (acc, item) =>
                acc +
                (item.product.discountPrice ?? item.product.price) *
                    item.product.quantity,
            0
        )

        const order = await Order.create({
            deliveryTypeId,
            userId: user?._id,
            deliveryAddress: address,
            sum,
        })

        for (let i = 0; i < basketItems.length; i++) {
            const item = basketItems[i]
            await OrderProduct.create({
                product: item.product._id,
                price: item.product.discountPrice ?? item.product.price,
                orderId: order._id,
                quantity: item.quantity,
            })
        }

        try {
            await BasketItem.deleteMany({ basketId: basketId })
            Basket.updateOne({ _id: basketId }, { totalSum: 0, quantity: 0 })
        } catch (e) {
            defaultError(res, e)
        }

        return res.json({ data: order })
    }
}


export const getOrderByFarmer = async (req, res) => {

    let {farmerId} = req.body;

    const products = await Product.find({
        farmerId
    });
    let data = [];
    for(let i = 0; i < products.length; i++){
        let order = await Order.find({
            product: products[i].id,
        })
        
        if(order) {
            data.push(order);
        }
    }
    console.log(data);

    return res.json({ data })
}