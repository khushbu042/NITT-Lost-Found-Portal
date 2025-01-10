import { User } from "../models/user.model"


const registerUser =  async(req,res)=> {
    const {username, fullName, email,password, contactNo} = req.body
    
    if([username,fullName,email,password,contactNo].some((field)=>{ !field || field.trim=== "" })){
        return res.status(400).json({message:"All fields are required"})
    }

    const existedUser = await User.findOne({
        $or : [{username},{email}]
    })

    if(existedUser){
        return res.status(400).json({message: "user is already existed please login !"});
    }

    try {
        const createUser = await User.create({
            username: username.toLowerCase(),
            fullName: fullName,
            email: email,
            password: password,
            contactNo: contactNo
        }) 
        if(!createUser){
            return res.status(400).json({message: "something went wrong"});
        }

        return res.status(200).json({
            message: "User is Registered Successfully !",
            data: createUser
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export {
    registerUser
}