import Category from "../Models/Category.js";

export const addCategory = async (req, res) => {
    let {title, imagePath} = req.body;

    Category.create({
        title,
        img: imagePath,
    }).then(data => {
        res.json(data);
    })
}


export const getCategories = async (req, res) => {


    res.json( await Category.find());
}
