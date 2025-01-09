import mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index:true
    },
    fullName:{
        type: String,   
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    contactNo:{
        type : Number,
        required: true
    }

},{timestamps: true})


export const User = mongoose.model("User",userSchema);
