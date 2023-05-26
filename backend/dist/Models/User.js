import { Schema } from "mongoose";
import mongoose from "mongoose";
const user = new Schema({
    name: String,
    surname: String,
    login: String,
    password: String,
    logo: {
        type: String,
        default: null,
    },
}, { timestamps: true });
const User = mongoose.model("User", user);
export default User;
