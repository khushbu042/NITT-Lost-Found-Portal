import jwt from "jsonwebtoken";

const jwtVerify = async (req,res,next)=> {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
        if(!token){
           return res.status(401).json({message: "Unauthorized access: No token provided"})
        } 
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        
        req.user_id = decodedToken._id


        next();
    } catch (error) {
        return res.status(401).json({message:"invalid access Token", error})
    }
}

export {jwtVerify}
