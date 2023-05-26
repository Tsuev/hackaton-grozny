import crypto from 'crypto'
import Token from './Models/Token.js'
import User from './Models/User.js'

export const hashPassword = (password) => {
    return crypto.createHash('md5').update(password).digest('hex')
}

export const getUserByToken = async (req) => {
    const token = req.headers.authorization
    const tokenModel = await Token.findOne({ token })
    if (tokenModel) User.findOne({ _id: tokenModel.user })
    return null
}

export const defaultError = (res, err) => res.status(500).json({ message: err })
