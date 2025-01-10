import express from "express"
import cookieParser from "cookie-parser"
const app = express();


app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}));
app.use(cookieParser());


// import Routes
import {userRoute} from "./routers/user.route.js";


// route declaration
app.use('/api/users',userRoute)




export  {app};