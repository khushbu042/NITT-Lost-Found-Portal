import { Item } from "../models/item.model.js";
import sendResponse from "../utils/sendResponse.js";

const reportItem = async(req,res) => {

    try{
        const userId = req.user_id;
        if(!userId){
            return sendResponse(res,false,"Unauthorized: Please log in to report an item.",null, 401);
        }
        // Extract data from request body
         const { title, category, description, location } = req.body;

        // Validate required fields
        if (!title || !category || !description || !location)  {
            return sendResponse(res,false,"Missing required fields: type, category, or description.",null, 400);
        }

        // const itemImagePath = req.file?.path;
        const itemImagePath = req.file?.path.replace("public\\","").replace("temp\\","");
        
        // Create a new item
        const newItem = new Item({
            postedBy: userId,
            title,
            category,
            description,
            image: itemImagePath || null, // Store null if no image is provided,
            location: location,
        });

        // Save the item to the database
        const savedItem = await newItem.save();

        // Respond with the created item
        return sendResponse(res,true,"Item reported successfully.",savedItem,200);
    }catch(error){
        console.error("Error reporting item:", error);
        return sendResponse(res,false,"An error occurred while reporting the item.",null,500);
    }
}

const searchItems = async (req,res) => {
    try {
        const {search, location, status} = req.query;
        const query = {};

        if(search) query.title = { $regex: search, $options: "i"};
        if(location) query.location = location;
        if(status) query.status = status;

        const items = await Item.find(query);
        if(!items){
            return sendResponse(res,false,"no items reported",null,500);
        }

        return sendResponse(res,true,"All items are here:",items,200);
    } catch (error) {
        console.error("Error Searching item:", error);
        return sendResponse(res,false,"An error occurred while Searching the item.",null,500);
    }
}

const recentItems= async (req,res) => {
    try {
        const recentItemList = await Item.find({category:"found"}).sort({createdAt: -1}).limit(5);

        if(!recentItemList){
            return sendResponse(res,false,"Items are not found",null,401);
        }

        console.log(recentItemList);

       return sendResponse(res,true,"Recently found items are here:",recentItemList,200);
        
    } catch (error) {
        
    }

}

export {
    reportItem,
    searchItems,
    recentItems
}