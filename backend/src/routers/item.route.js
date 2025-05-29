import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { 
    reportItem,
    searchItems,
    recentItems
} from "../controllers/item.controller.js";

const itemRoute = Router();

// Report a new item
itemRoute.route('/report-item').post(authMiddleware, upload.single("image"), reportItem);

//search items based on condition
itemRoute.route('/search').get(searchItems);

// // Get all items (with optional filters)
itemRoute.route('/recent-item').get(authMiddleware,recentItems)

export {itemRoute}
