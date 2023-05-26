import Farmer from "../Models/Farmer.js";
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



    let product = await Product.find().lean().catch(err => {
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

        // result.push({product: product[i], farmerName:`${surname} ${name}`}) 
        result.push({...product[i], farmerName:`${surname} ${name}`}) 
         
        
    }
    console.log(result)
    res.json(result);
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