
import {Router} from "express"
import { 
    loginUser, 
    logoutUser, 
    registerUser 
} from "../controllers/user.controller.js"


const userRoute = Router()

//public route
userRoute.route("/register").post(registerUser)
userRoute.route("/login").post(loginUser)
userRoute.route("/logout").post(logoutUser)



export {userRoute}
