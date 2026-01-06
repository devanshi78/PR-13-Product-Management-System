import { Router } from "express";
import adminRouter from "./admin.route.js";
import categoryRouter from "./category.route.js";
import userAuth from "../middlewares/userauth.js";
import productRouter from "./product.route.js";
import saleRouter from "./sale.route.js";
import purchaseRouter from "./purchase.route.js";

const router = Router();

router.use('/',adminRouter)
router.use('/',userAuth,categoryRouter)
router.use('/',userAuth,productRouter)
router.use('/',userAuth,saleRouter)
router.use('/',userAuth,purchaseRouter)

export default router; 