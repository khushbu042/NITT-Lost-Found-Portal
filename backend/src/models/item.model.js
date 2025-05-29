import mongoose from "mongoose";


const ItemSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    category: {
        type : String,
        enum: ["lost", "found"],
        required: true
    },
    description:{
        type : String,
        required: true
    },
    image:{
        type: String,  // url of cloudinary 
        default: null
    },
    location:{
        type : String,
        default: null
    },
    status:{ 
        type: String, 
        enum: ["pending", "resolved"], 
        default: "pending" 
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    claimedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }


},{timeStamps: true});

export const Item = mongoose.model("Item",ItemSchema);