import { connectDB } from "./db/config.js";
import dotenv from 'dotenv';

dotenv.config({
    path:"./env"
})





connectDB();