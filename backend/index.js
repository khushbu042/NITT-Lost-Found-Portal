import dotenv from "dotenv";
import { connectDB } from "./src/database/db.js";
import {app} from "./src/app.js";

dotenv.config()

// MongoDb Connection call 
connectDB()
.then(()=> {
    app.listen(process.env.PORT|| 3000, () => {
        console.log("server running on port : ", process.env.PORT);
    })
})
.catch((error)=>{
    console.log("MongoDb Connecton failed!",error)
})