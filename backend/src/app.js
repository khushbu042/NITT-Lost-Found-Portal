import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();


app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}));
app.use(cors({
    origin: "http://localhost:3000",  // frontend origin
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(cookieParser());
app.use('/static', express.static('public/temp'))


// import Routes
import {userRoute} from "./routers/user.route.js";
import { itemRoute } from "./routers/item.route.js";


// route declaration
app.use('/api/user',userRoute)
app.use('/api/item',itemRoute)




export  {app};