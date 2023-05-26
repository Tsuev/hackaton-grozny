import * as mongoose from "mongoose";

export default async function connect() {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("database work");
    })
    .catch((err) => {
      console.log(err);
    });
}
