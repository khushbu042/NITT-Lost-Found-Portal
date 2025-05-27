import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { 
    // deleteItem,
    // getAllItem,
    // getItemDetails,
    // getUserItems,
    reportItem,
    searchItems
    // updateItem 
} from "../controllers/item.controller.js";

const itemRoute = Router();

// Report a new item
itemRoute.route('/report-item').post(authMiddleware, upload.single("image"), reportItem);

//search items based on condition
itemRoute.route('/search').get(searchItems);

// // Get all items (with optional filters)
// itemRouter.route('/items').get(jwtVerify, getAllItem);

// // Get all items reported by the authenticated user
// itemRouter.route('/user').get(jwtVerify, getUserItems);

// // Get details of a specific item by ID
// itemRouter.route('/items/:id').get(jwtVerify, getItemDetails);

// // Update a specific item by ID
// itemRouter.route('/item/:id').put(jwtVerify, updateItem);

// // Delete a specific item by ID
// itemRouter.route('/items/:id').delete(jwtVerify, deleteItem);


export {itemRoute}
