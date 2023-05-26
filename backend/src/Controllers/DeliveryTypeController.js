import DeliveryType from "../Models/DeliveryType.js";

export const addType = async (req, res)=> {
    let {title} = req.body;

    DeliveryType.create({
        title,
    }).then(data => {
        res.json(data);
    }).catch(()=> {
        res.json({
            msg: 'something went wrong',
        })
    })

}
export const getTypes = async (req, res)=> {

    DeliveryType.find().then(data => {
        res.json(data);
    }).catch(()=> {
        res.json({
            msg: 'something went wrong',
        })
    })
}


