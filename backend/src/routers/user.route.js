
import {Router} from "express"
import { registerUser } from "../controllers/user.controller"


const userRoute = Router()


userRoute.route("/signup").post(registerUser)


export {userRoute}
