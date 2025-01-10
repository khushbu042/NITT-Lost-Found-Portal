import express from "express"
import userRoute from "./routers/user.route";

const app = express();



// import Routes
import {userRoute} from "./routers/user.route";


// route declaration
app.use('/api/users',userRoute)




export  {app};