import { DataTypes } from "sequelize";
import { sequelize } from "../server.js";
export const User = sequelize.define("Farmer", {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    inn: DataTypes.STRING,
    kpp: DataTypes.STRING,
    organisationName: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    bankAccountNumber: DataTypes.STRING,
    bankCardHolder: DataTypes.STRING,
});
