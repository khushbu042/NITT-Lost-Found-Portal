import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();


app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}));
app.use(cors());
app.use(cookieParser());


// import Routes
import {userRoute} from "./routers/user.route.js";
// import { itemRouter } from "./routers/item.route.js";


// route declaration
app.use('/api/user',userRoute)
// app.use('/api/item',itemRoute)




export  {app};