import mongoose  from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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

// // Password Hashing Before save into the database
// userSchema.pre('save', async function(next){
//     if(!this.isModified("password")) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// })

// // password checking for login 
// userSchema.methods.isPasswordCorrect = async function (password) {
//     return await bcrypt.compare(password, this.password)
// }

// // method for create accessToken
// userSchema.methods.generateAccessToken = function (){
//     return jwt.sign(
//         {
//             _id: this._id
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//         }
//     )
// }


export const User = mongoose.models.User || mongoose.model("User", userSchema);

