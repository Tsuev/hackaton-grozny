import Farmer from '../Models/Farmer.js'
import Product from '../Models/Product.js'


export const addProdImage = async (req, res) => {
    res.json(req.files[0].path.replaceAll("\\", "/"));
}


export const addProduct = async (req, res) => {
    let {
        title,
        description,
        farmerId,
        categoryId,
        price,
        volume,
        optPrice,
        optQuantity,
        discountPrice,
        quantity,
        image,
    } = req.body

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
        image,
    })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json({
                msg: 'Something wrong',
                err,
            })
        })
}

export const getProduct = async (req, res) => {
    let product = await Product.find()
        .lean()
        .catch((err) => {
            res.json({
                msg: 'Something wrong',
                err,
            })
        })

    let result = []
    for (let i = 0; i < product.length; i++) {
        let { name, surname } = await Farmer.findOne({
            _id: product[i].farmerId,
        })

        result.push({ ...product[i], farmerName: `${surname} ${name}` })
    }

    res.json(result)
}

export const getProductByCategory = async (req, res) => {

    let {categoryId} = req.query;
    let product = await Product.find(        {
        categoryId,
    }).lean()
        .catch((err) => {
            res.json({
                msg: 'Something wrong',
                err,
            })
        })

    let result = []
    for (let i = 0; i < product.length; i++) {
        let { name, surname } = await Farmer.findOne({
            _id: product[i].farmerId,
        })

        result.push({ ...product[i], farmerName: `${surname} ${name}` })
    }
    res.json(result);
}


export const getProductByFarmer = async (req, res) => {
    let {farmerId} = req.query;
    let product = await Product.find(        {
        farmerId,
    }).lean().catch(err => {
        res.json({
            msg: 'Something wrong',
            err
        })
    })
    let result = []
    for(let i = 0; i < product.length; i++) {
        let {name, surname} = await Farmer.findOne({
            _id: product[i].farmerId
        })

        result.push({...product[i], farmerName:`${surname} ${name}`}) 
        
    }
    res.json(result);
}

