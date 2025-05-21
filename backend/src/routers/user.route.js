
import {Router} from "express"
import { 
    loginUser, 
    registerUser 
} from "../controllers/user.controller.js"
// import { jwtVerify } from "../middlewares/auth.middleware.js"


const userRoute = Router()


userRoute.route("/register").post(registerUser)
userRoute.route("/login").post(loginUser)


export {userRoute}
