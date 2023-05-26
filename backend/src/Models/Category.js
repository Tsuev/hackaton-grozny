import { Schema, model } from "mongoose";
const category = new Schema({
    title: String,
    image: {
        type: String,
        default: null,
    },
}, { timestamps: true });
const Category = model("Category", category);
export default Category;
