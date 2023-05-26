var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as mongoose from "mongoose";
export default function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose.set("strictQuery", false);
        yield mongoose
            .connect(process.env.MONGODB_URL)
            .then(() => {
            console.log("database work");
        })
            .catch((err) => {
            console.log(err);
        });
    });
}
