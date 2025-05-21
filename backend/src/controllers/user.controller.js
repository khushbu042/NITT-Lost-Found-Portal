import sendResponse from "../utils/sendResponse.js";
import {User} from "../models/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const registerUser = async (req,res) => {
    try {
        
        console.log("req body:",req.body);
        const { fullName, email, password} = req.body;
        console.log("req detail:", fullName,email,password);
        if (!(fullName && email && password)) {
            return sendResponse(res,false,"username, email and password are required",null,400);
        }
        //finding a email in database if it found login is required
        //Check if user already exists
        const existingUser = await User.findOne({email})

        console.log("existing User", existingUser)
        if(existingUser){
            return sendResponse(res,false,"User is already registerd please login",null,409);
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashedPassword:", hashedPassword);

        //now i will store in database or create a User
        const user = await User.create({
            fullName,
            password:hashedPassword,
            email
        });
        console.log("after Creating user:", user);

        if(!user){
            return sendResponse(res,false,"something wrong when user is created",null,401);
        }
        const createdUser = await User.findById(user._id).select("-password");
        console.log("after removing Password:", createdUser);
        return sendResponse(res,true,"User created successfully",createdUser,201);

    }catch(error){
        console.log("catch block error")
        console.error(error);
        return sendResponse(res,false,"Internal Server Error",null,500);
    }

}

const loginUser = async (req, res) => {
    try{
        const{email, password}= req.body
        if(!(email && password)){
            return sendResponse(res,false,"Email and Password is required",null,400);
        }

        //finding email in database
        const existingUser = await User.findOne({email})
        if(!existingUser){
            return sendResponse(res,false,"user is not registered please register",null,401);

        }

        // comapre password 
        const validPassword = await bcrypt.compare(password,existingUser.password) 
       
        if(!validPassword){
            return sendResponse(res,false,"password is incorrect",null,401);

        }

        // create a json Web token 
        const jwtToken = jwt.sign(
            {_id: existingUser._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"1h"}
        );  

        // send token in cookie or header
        res.cookie("jwtToken",jwtToken, {
            httpOnly: true,       // JS se access na ho
            secure: false,        // true in production with HTTPS
            sameSite: "lax",   // CSRF attack safe
            maxAge: 60 * 60 * 1000 // 1 hour
        });
        return sendResponse(res,true,"Login successful",existingUser,200);

    }catch(error){
        console.log("catch block error",error);
        return sendResponse(res,false,"Internal Server Error",null,500);
    }
}


export { 
    registerUser,
    loginUser
}


