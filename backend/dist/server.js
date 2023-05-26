import express from "express";
import Dotenv from "dotenv";
import connect from "./db/db.js";
Dotenv.config();
const app = express();
const port = 3000;
connect();
app.get("/", (req, res) => {
    res.send("Hello 12121212");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
