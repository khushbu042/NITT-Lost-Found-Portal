import express from "express"
import cookieParser from "cookie-parser"
const app = express();


app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}));
app.use(cookieParser());


// import Routes
import {userRoute} from "./routers/user.route.js";
import { itemRouter } from "./routers/item.route.js";


// route declaration
app.use('/api/users',userRoute)
app.use('/api/items',itemRouter)




export  {app};