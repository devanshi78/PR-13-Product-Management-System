import express from "express";
import userAuth from "../middlewares/userauth.js";
import clientController from "../controllers/client.controller.js";

const userRouter = express.Router();

// USER DASHBOARD
userRouter.get("/dashboard",userAuth,clientController.dashboard);

// USER PROFILE
userRouter.get("/profile",userAuth,clientController.profilePage);

// USER LOGOUT
userRouter.get("/logout",userAuth,clientController.logout);

export default userRouter;
