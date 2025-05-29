import mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
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
    }

},{timestamps: true})


export const User = mongoose.models.User || mongoose.model("User", userSchema);

