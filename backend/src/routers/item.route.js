import { Router } from "express";
import { jwtVerify } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { reportItem } from "../controllers/item.controller.js";

const itemRouter = Router();


itemRouter.route('/report-item').post(jwtVerify,upload.single(image),reportItem);


export {itemRouter}