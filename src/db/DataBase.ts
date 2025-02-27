import mongoose from "mongoose";
import {configDotenv} from "dotenv";
configDotenv();
export const connectABC = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "")
        console.log("bolson2")
    }catch(error) {
        console.log("chi ystoi hudlaa shajiinda")
    }
}