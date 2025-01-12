import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    type: {
        type : String,
        required: true
    },
    category: {
        type : String,
        required: true
    },
    description:{
        type : String,
        required: true
    },
    image:{
        type: String,
        default: null
    },
    location:{
        type : String,
        default: null
    }

},{timeStamps: true});

export const Item = mongoose.model("Item",ItemSchema);