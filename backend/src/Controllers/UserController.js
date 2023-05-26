import Token from '../Models/Token.js'
import User from '../Models/User.js'
import { defaultError, getUserByToken, hashPassword } from '../utils.js'

export const userSaveCard = async (req, res) => {
    const { cardNumber, cardCvs, cardExpiredDate, cardHolder } = req.body

    const user = getUserByToken(req)

    let result = await User.findOne({
        email: email,
        password: cryptPassword,
    })

    if (result) {
        let str = new Date().getTime().toString()

        const hash = hashPassword(str)
        await Token.create({
            token: hash,
        })

        return res.json({
            token: hash,
            message: 'Success',
            user: result,
        })
    }
}
