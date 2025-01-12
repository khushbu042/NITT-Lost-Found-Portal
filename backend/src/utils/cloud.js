import { v2 as cloudinary } from 'cloudinary';
import fs from "fs" 

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,  
    api_secret: process.env.CLOUD_API_SECRET
});

const uploadONCloud =  async(localFilePath) => {
    try {
        if(! localFilePath)  return null;

        // upload file on cloud
        const uploadResult = await cloudinary.uploader.upload(
            localFilePath, {resource_type : "auto"}
        )
        //upload file sucessfully on cloudinary
        // fs.unlinkSync(localFilePath);
        return uploadResult;
    }
    catch (error){
        fs.unlinkSync(localFilePath)  / // remove the locally saved temporary file as the upload got failed
        console.log(error);
        return null; 
    }
}

export {uploadONCloud}