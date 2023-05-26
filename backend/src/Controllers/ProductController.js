import Product from "../Models/Product.js"


export const addProduct = async (req, res) => {
    let  {title, description, farmerId, categoryId, price, volume, optPrice, optQuantity, discountPrice, quantity, image} = req.body;

    Product.create({
        title,
        description,
        volume,
        farmerId,
        categoryId,
        price,
        optPrice,
        optQuantity,
        discountPrice,
        quantity,
        image
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            msg: 'Something wrong',
            err
        })
    })
}


export const getProduct = async (req, res) => {
    
    Product.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            msg: 'Something wrong',
            err
        })
    })
}


export const getProductByCategory = async (req, res) => {
    let {categoryId} = req.query;
   
    Product.find(
        {
            categoryId,
        }
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            msg: 'Something wrong',
            err
        })
    })
}