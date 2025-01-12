import { uploadONCloud } from "../utils/cloud.js";
import { Item } from "../models/item.model.js";

const reportItem = async(req,res) => {
    try{
        const userId = req.user_id;
        if(!userId){
            return res.status(401).json({ message: "Unauthorized: Please log in to report an item." });
        }
        // Extract data from request body
         const { type, category, description, location } = req.body;

        // Validate required fields
        if (!type || !category || !description) {
            return res.status(400).json({ message: "Missing required fields: type, category, or description." });
        }

        // Handle optional image upload
        let itemImageUrl = null;
        const itemImagePath = req.file?.path;
        if(itemImagePath){
            const itemImage = await uploadONCloud(itemImagePath)
            if(!itemImage.url){
                return res.status(401).json({
                    message: "Error while uploading on image"
                })
            }
            itemImageUrl = itemImage.url
        }
        
        // Create a new item
        const newItem = new Item({
            user_id: userId,
            type,
            category,
            description,
            image: itemImageUrl || null, // Store null if no image is provided,
            location: location || null,
        });

        // Save the item to the database
        const savedItem = await newItem.save();

        // Respond with the created item
        res.status(201).json({
            message: "Item reported successfully.",
            item: savedItem,
        });
    }catch(error){
        console.error("Error reporting item:", error);
        res.status(500).json({
            message: "An error occurred while reporting the item.",
           errorMessage: error
        });
    }

}

export {reportItem}