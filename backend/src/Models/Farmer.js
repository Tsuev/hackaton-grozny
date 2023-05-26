import { Schema } from "mongoose";
import mongoose from "mongoose";

const farmer = new Schema(
  {
    name: String,
    surname: String,
    email: String,
    password: String,
    isAccepted: {
      type:  Boolean,
      default: false
    },
    organizationName: String,
    address: String,
    bankCardNumber: String,
    bik: String,
    kpp: String,
    inn: String,
    bankCardHolder: String,
    region: String,
    city: String,
    deliveryTypes: Array,
  },
  { timestamps: true }
);

const Farmer = mongoose.model("Farmer", farmer);

export default Farmer;