import mongoose from "mongoose";

export const connectDB =  async () => {
    try{
        const connectedDB = await mongoose.connect(`${process.env.MONGODB_URI}/lost_found_item`);
        console.log("MongoDb Connection SuccessFully!");
        // console.log(connectedDB);
    }catch(error){
        console.log("MongoDb Connection Error: ", error)
    }
}

