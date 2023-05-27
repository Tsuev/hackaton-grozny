import Category from '../Models/Category.js'

export const addCategory = async (req, res) => {
    let { title, imagePath } = req.body

    Category.create({
        title,
        img: imagePath,
    }).then((data) => {
        res.json(data)
    })
}

export const getCategories = async (req, res) => {
<<<<<<< HEAD

    res.json( await Category.find());
=======
    res.json(await Category.find())
>>>>>>> 633730c933f98ba1da08caf7979b9ebd14f8a650
}
