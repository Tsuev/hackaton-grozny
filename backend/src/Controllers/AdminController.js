import Farmer from '../Models/Farmer.js'
import { defaultError } from '../utils.js'

export const acceptFarmer = async (req, res) => {
    const id = req.query.id

    if (id) {
        try {
            const farmer = await Farmer.updateOne(
                { _id: id },
                { isAccepted: true }
            )
            return res.json({ success: trues })
        } catch (e) {
            defaultError(e)
        }
    }
}
