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
        return res.status(201).json({
            message: "Item reported successfully.",
            item: savedItem,
        });
    }catch(error){
        console.error("Error reporting item:", error);
        return res.status(500).json({
            message: "An error occurred while reporting the item.",
           errorMessage: error
        });
    }

}

const getAllItem = async(req,res) => {
    try{

        const { type, category, location } = req.query;

        // Build filter query
        const filters = {};
        if (type) filters.type = type;
        if (category) filters.category = category;
        if (location) filters.location = location;

        const items = await Item.find(filters);
        if(!items){
            return res.status(401).json({message: "no items reported"})
        }

        return res.status(200).json({
            message:"All item are here: ",
            items
        })
    }catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "An error occurred while fetching items.", error });
    }

}

const getItemDetails = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            return res.status(404).json({ message: "Please select item for detail" });
        }
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found." });
        }
        res.status(200).json({ message:"Item details are there: ",item });
    } catch (error) {
        console.error("Error fetching item details:", error);
        res.status(500).json({ message: "An error occurred while fetching item details.", error });
    }
};

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user_id;

        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found." });
        }

        // Check if the authenticated user is the owner of the item
        if (item.user_id.toString() !== userId) {
            return res.status(403).json({ message: "You are not authorized to update this item." });
        }

        const updates = req.body;
        const updatedItem = await Item.findByIdAndUpdate(id, updates, { new: true });

        res.status(200).json({
            message: "Item updated successfully.",
            item: updatedItem,
        });
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ message: "An error occurred while updating the item.", error });
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user_id;

        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found." });
        }

        // Check if the authenticated user is the owner of the item
        if (item.user_id.toString() !== userId) {
            return res.status(403).json({ message: "You are not authorized to delete this item." });
        }

        await Item.findByIdAndDelete(id);
        res.status(200).json({ message: "Item deleted successfully." });
    } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).json({ message: "An error occurred while deleting the item.", error });
    }
};

const getUserItems = async (req, res) => {
    try {
        const userId = req.user_id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized: Please log in." });
        }

        const items = await Item.find({ user_id: userId });
        res.status(200).json({message:"Your item are here:",items });
    } catch (error) {
        console.error("Error fetching user items:", error);
        res.status(500).json({ message: "An error occurred while fetching user items.", error });
    }
};




export {
    reportItem,
    getAllItem,
    getItemDetails,
    updateItem,
    deleteItem,
    getUserItems
}