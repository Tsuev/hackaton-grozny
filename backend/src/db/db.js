import * as mongoose from 'mongoose'
export default function connect() {
    mongoose.set('strictQuery', false)
    mongoose
        .connect('mongodb+srv://farmer:farmer12345@farmer.yssieqi.mongodb.net/')
        .then(() => {
            console.log('database work')
        })
        .catch((err) => {
            console.log(err)
        })
}
