import Token from '../Models/Token.js'
import User from '../Models/User.js'
import { defaultError, getUserByToken, hashPassword } from '../utils.js'

export const userSaveCard = async (req, res) => {
    const { cardNumber, cardCvs, cardExpiredDate, cardHolder } = req.body

    const user = await getUserByToken(req)

    const result = User.updateOne(
        { _id: user._id },
        { cardNumber, cardCvs, cardExpiredDate, cardHolder }
    )

    if (result) {
        return res.json({
            message: 'Success',
        })
    }
}
