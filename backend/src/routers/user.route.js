
import {Router} from "express"
import { 
    changeCurrentPassword,
    loginUser, 
    registerUser 
} from "../controllers/user.controller.js"
import { jwtVerify } from "../middlewares/auth.middleware.js"


const userRoute = Router()


userRoute.route("/signup").post(registerUser)
userRoute.route("/login").post(loginUser)
userRoute.route("/change-password").post(jwtVerify,changeCurrentPassword)


export {userRoute}
