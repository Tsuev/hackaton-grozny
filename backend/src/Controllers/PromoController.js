import Promocode from '../Models/Promocode.js'
import { defaultError } from '../utils.js'

export const addPromocode = async (req, res) => {
    const { percent, activeUntil, farmerId } = req.body

    try {
        const promo = await Promocode.create({
            discountPercent: percent,
            activeUntil,
            farmerId,
        })
        return res.json({ data: promo })
    } catch (e) {
        defaultError(e)
    }
}
