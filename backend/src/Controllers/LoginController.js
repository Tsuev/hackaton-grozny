import Token from '../Models/Token.js'
import User from '../Models/User.js'
import { defaultError, hashPassword } from '../utils.js'

export const userRegister = async (req, res) => {
    const { name, surname, email, password, phone, address } = req.body

    try {
        if (password.length < 6) {
            return res.status(500).json({
                message: 'password has to be at least 6 symbols',
            })
        }

        await User.create({
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            address,
            password: hashPassword(password),
        })
            .then((user) => {
                return res.json({
                    data: user,
                })
            })
            .catch((err) => {
                return res.status(403).json({
                    message: err,
                })
            })
    } catch (error) {
        return defaultError(res, error)
    }
}

export const userAuth = async (req, res) => {
    const { email, password } = req.body
    let cryptPassword = hashPassword(password)

    let result = await User.findOne({
        email: email,
        password: cryptPassword,
    })

    if (result) {
        let str = new Date().getTime().toString()

        const hash = hashPassword(str)
        await Token.create({
            token: hash,
            user: result._id,
        })

        return res.json({
            token: hash,
            message: 'Success',
            user: result,
        })
    }
}


