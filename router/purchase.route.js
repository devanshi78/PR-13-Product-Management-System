import { Router } from "express";
import purchaseController from "../controllers/purchase.controller.js";

const purchaseRouter = Router();

// Add purchase
purchaseRouter.get("/purchases/add", purchaseController.addPurchasePage);
purchaseRouter.post("/purchases/add", purchaseController.addPurchase);

// View purchases
purchaseRouter.get("/purchases/view", purchaseController.viewPurchase);

// Edit purchase
purchaseRouter.get("/purchases/edit/:id", purchaseController.editPurchasePage);
purchaseRouter.post("/purchases/edit/:id", purchaseController.editPurchase);

// Delete purchase
purchaseRouter.get("/purchases/delete/:id", purchaseController.deletePurchase);

export default purchaseRouter;