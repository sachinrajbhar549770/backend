import { connectDB } from "./db/config.js";
import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config({
    path:"./env"
})





connectDB()
.then(()=>{
     app.listen(process.env.PORT || 4000, ()=>{
        console.log("server is running on the port...",process.env.PORT)
     })

}).catch((err)=>{

    console.log("MONGODB connection failed !!", err);

})