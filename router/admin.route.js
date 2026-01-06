import { Router } from "express";
import adminController from "../controllers/admin.controller.js";
import userAuth from "../middlewares/userauth.js";
import imageUpload from "../middlewares/imageUpload.js";

const adminRouter = Router();

adminRouter.get('/signup',adminController.signupUserPage);
adminRouter.post('/signup',imageUpload,adminController.signupUser);

adminRouter.get('/login',adminController.loginUserPage);
adminRouter.post('/login',adminController.loginUser);

adminRouter.use(userAuth);
adminRouter.get('/',adminController.homepage);
adminRouter.get('/profile',adminController.profilePage);
adminRouter.get('/logout',adminController.logout);

// Edit User-Profile
adminRouter.get('/edit-user/:id',adminController.editUserpage);
adminRouter.post('/edit-user/:id',imageUpload,adminController.editUser);

// change password
adminRouter.get('/accountSettings',adminController.accountSettingPage)
adminRouter.post('/accountSettings',adminController.accountSetting)

export default adminRouter;