import { Router } from "express";
import saleController from "../controllers/sale.controller.js";

const saleRouter = Router();

saleRouter.get("/sales/add", saleController.addSalePage);
saleRouter.post("/sales/add", saleController.addSale);
saleRouter.get("/sales/view", saleController.viewSale);

saleRouter.get('/sales/edit/:id', saleController.editSalePage);
saleRouter.post('/sales/edit/:id', saleController.editSale);
saleRouter.get('/sales/delete/:id', saleController.deleteSale);

export default saleRouter;