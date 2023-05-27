import Basket from '../Models/Basket.js'
import BasketItem from '../Models/BasketItem.js'
import Product from '../Models/Product.js'
import Order from '../Models/Order.js'
import { getUserByToken } from '../utils.js'
import OrderProduct from '../Models/OrderProduct.js'

export const getOrders = async (req, res) => {
    const user = await getUserByToken(req)
    if (!user) {
        res.status(500).json({ message: 'No token provided' })
    }

    const orders = await Order.find({ userId: user._id })
    return res.json({ data: orders })
}

export const createOrder = async (req, res) => {
    const { basketId, deliveryTypeId, address } = req.body

    const basket = await Basket.findOne({ _id: basketId })
    if (basket) {
        const items = await BasketItem.find({ basketId: basket._id })
        const basketItems = items.map(async (item) => {
            return {
                ...item,
                product: await Product.findOne({ _id: item.product }),
            }
        })

        const user = await getUserByToken(req)

        const sum = basketItems.reduce(
            (acc, item) =>
                (acc +=
                    (item.product.discountPrice ?? item.product.price) *
                    item.product.quantity)
        )

        const order = await Order.create({
            deliveryTypeId,
            userId: user?._id,
            deliveryAddress: address,
            sum,
        })

        basketItems.forEach((item) => {
            OrderProduct.create({
                product: item.product,
                price: item.product.discountPrice ?? item.product.price,
                orderId: order._id,
                quantity: item.quantity,
            })
        })
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