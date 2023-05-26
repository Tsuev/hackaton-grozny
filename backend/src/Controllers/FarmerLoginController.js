import Token from '../Models/Token.js'
import Farmer from '../Models/Farmer.js'
import { defaultError, hashPassword } from '../utils.js'

export const farmerRegister = async (req, res) => {
    const { name, surname, email, password, organizationName, address,  bankCardNumber, bik, kpp, inn, bankCardHolder, region, city, deliveryTypes} = req.body

    try {
        if (password.length < 6) {
            return res.status(500).json({
                message: 'password has to be at least 6 symbols',
            })
        }

        await Farmer.create({
            name,
            surname,
            email,
            address,
            organizationName,
            bankCardNumber,
            bik,
            kpp,
            inn,
            bankCardHolder,
            region,
            city,
            deliveryTypes,
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

// export const userAuth = async (req, res) => {
//     const { email, password } = req.body
//     let cryptPassword = hashPassword(password)

//     let result = await User.findOne({
//         email: email,
//         password: cryptPassword,
//     })

//     if (result) {
//         let str = new Date().getTime().toString()

//         const hash = hashPassword(str)
//         await Token.create({
//             token: hash,
//         })

//         return res.json({
//             token: hash,
//             message: 'Success',
//             user: result,
//         })
//     }
// }