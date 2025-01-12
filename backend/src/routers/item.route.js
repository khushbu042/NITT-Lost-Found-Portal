import { Router } from "express";
import { jwtVerify } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { 
    deleteItem,
    getAllItem,
    getItemDetails,
    getUserItems,
    reportItem, 
    updateItem } from "../controllers/item.controller.js";

const itemRouter = Router();

// Report a new item
itemRouter.route('/report-item').post(jwtVerify, upload.single("image"), reportItem);

// Get all items (with optional filters)
itemRouter.route('/items').get(jwtVerify, getAllItem);

// Get all items reported by the authenticated user
itemRouter.route('/items/user').get(jwtVerify, getUserItems);

// Get details of a specific item by ID
itemRouter.route('/items/:id').get(jwtVerify, getItemDetails);

// Update a specific item by ID
itemRouter.route('/items/:id').put(jwtVerify, updateItem);

// Delete a specific item by ID
itemRouter.route('/items/:id').delete(jwtVerify, deleteItem);


export {itemRouter}
