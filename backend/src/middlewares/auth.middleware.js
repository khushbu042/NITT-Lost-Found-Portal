import sendResponse from "../utils/sendResponse.js";
import verifyToken from "../utils/verifyToken.js";

const authMiddleware = async (req,res,next)=> {
    try {
        const token = req.cookies?.jwtToken || req.header("Authorization")?.replace("Bearer ","");
        if(!token){
           return sendResponse(res, false, "Login first", null, 401);
        } 
        const {success,decoded} = verifyToken(token);
        if(!success){
            return sendResponse(res, false, "Invalid or expired token", null, 401);
        }
        req.user_id = decoded._id
        next();
    } catch (error) {
        return sendResponse(res, false, "Invalid or expired token", null, 401);
    }
}

export {authMiddleware}
