import { User } from "../models/user.model.js"


const registerUser =  async(req,res)=> {
    try {
        const {username, fullName, email , password, contactNo} = req.body
    
        if([username,fullName,email,password,contactNo].some((field)=>{ !field || field.trim=== "" })){
            return res.status(400).json({message:"All fields are required"})
        }

        const existedUser = await User.findOne({
            $or : [{username},{email}]
        })

        if(existedUser){
            return res.status(400).json({message: "user is already existed please login !"});
        }

    
        const createdUser = await User.create({
            username: username,
            fullName: fullName,
            email: email,
            password: password,
            contactNo: contactNo
        }) 
        if(!createdUser){
            return res.status(400).json({message: "something went wrong"});
        }

        //------------------------remove passwrod and refresh token field from response
        const registeredUser = await User.findById(createdUser._id).select("-password")
        if(!registeredUser){
            return res.status(400).json({message: "User registered not successfully"});
        }

        return res.status(200).json({
            message: "User is Registered Successfully !",
            data: registeredUser
        });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error: error.message });
        }
}

const loginUser = async(req,res) => {
    const{email, password} = req.body

    if(!(email && password)){
        return res.status(400).json({
            message: "email and password is required"
        })
    }

    const existingUser = await User.findOne({email});

    if(!existingUser){
        return res.status(400).json({
            message: "user not register please register user"
        })
    }

    try{
        //-------- Password check
        const isPasswordValid = await existingUser.isPasswordCorrect(password)
        if(!isPasswordValid){
            return res.status(400).json({
                message: "Please Enter Correct Password"
            })
        }

        const accessToken = existingUser.generateAccessToken();
        if(!accessToken){
            return res.status(400).json({
                message: "something wrong to create AccessToken"
            })
        }

        const loggedInUser = await User.findById(existingUser._id).select("-password")

        //------------------------- send cokkies with accesss token and response
        const options = {
            httpOnly: true,
            secure: true
        }

        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .json({
            message:"User Logging Successfully",
            data: {loggedInUser, accessToken}
        })
    }catch(error){
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
   


}

const changeCurrentPassword = async(req,res) => {
    const {oldPassword, newPassword} = req.body 

    if(!(newPassword && oldPassword)){
        return res.status(401).json({message: "oldpassword and newpassword is required" })
    }
    
    const user = await User.findById(req.user_id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid old Password"})
    }
    user.password = newPassword
    const updateduser = await user.save({validateBeforeSave: false})
  
    return res.status(200).json({
        message:"Password Changed Sucessfully"
    })
}




export {
    registerUser,
    loginUser,
    changeCurrentPassword
}