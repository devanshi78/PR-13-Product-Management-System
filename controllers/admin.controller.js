import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import Category from "../models/category.model.js";
import Product from "../models/product.model.js";
import Sale from "../models/sale.model.js";
import Purchase from "../models/purchase.model.js";

let otp = null;

const adminController = {
  async homepage(req, res) {
    try {
      const categoryCount = await Category.countDocuments();
      const productCount = await Product.countDocuments();
      const saleCount = await Sale.countDocuments();
      const purchaseCount = await Purchase.countDocuments();

      res.render('index', {
        categoryCount,
        productCount,
        saleCount,
        purchaseCount
      });
    } catch (error) {
      console.log(error.message);
      res.render('index', {
        categoryCount: 0,
        productCount: 0,
        saleCount: 0,
        purchaseCount: 0
      });
    }
  },
  signupUserPage(req, res) {
    return res.render('./pages/signup.ejs');
  },
  async signupUser(req, res) {
    try {
      console.log(req.body);

      const { password, confirmpassword } = req.body;

      if (password != confirmpassword) {
        console.log("Password And Confirm PassWord Not Matched.");
        return res.redirect('/signup');
      }

      const hashpassword = await bcrypt.hash(password, 10);

      req.body.password = hashpassword;

      const user = await User.create(req.body);

      console.log(user + ' User Created.');
      return res.redirect('/login');
    } catch (error) {
      console.log(error.message)
      return res.redirect('/signup');
    }
  },
  loginUserPage(req, res) {
    return res.render('./pages/login.ejs');
  },
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      let user = await User.findOne({ email });

      if (user) {

        let isValid = await bcrypt.compare(password, user.password);

        if (isValid) {
          let payload = {
            id: user.id,
            role: user.role
          };

          const token = jwt.sign(payload, process.env.JWT_SECRET);

          console.log("Login success");

          res.cookie("token", token);

          if (user.role === "admin") {
            return res.redirect("/"); 
          } else {
            return res.redirect("/user/dashboard");
          }

        } else {
          console.log("Password not match.");
          return res.redirect("/login");
        }

      } else {
        console.log("User not found");
        return res.redirect("/login");
      }

    } catch (error) {
      console.log(error.message);
      return res.redirect("/login");
    }
  },
  profilePage(req, res) {
    return res.render('./pages/profile.ejs');
  },
  logout(req, res) {
    res.clearCookie('token');
    return res.redirect('/login');
  },
  async editUserpage(req, res) {
    try {
      const user = await User.findById(req.params.id);
      return res.render('./pages/editUser.ejs', {
        user
      })
    } catch (error) {
      console.log(error.message);
      return res.redirect('/profile');
    }
  },
  async editUser(req, res) {
    try {
      let data = req.body;

      // If new image uploaded
      if (req.file) {
        data.image = req.file.filename;
      }
      await User.findByIdAndUpdate(req.params.id, data, { new: true });
      return res.redirect('/profile');
    } catch (error) {
      console.log(error.message);
      return res.redirect('/edit-user');
    }
  },
  accountSettingPage(req, res) {
    return res.render('./pages/accountSettings.ejs');
  },
  async accountSetting(req, res) {
    try {
      const { currentPassword, newPassword, confirmpassword } = req.body;
      const { id } = req.cookies;

      let user = await User.findById(id);

      let isValid = await bcrypt.compare(currentPassword, user.password);

      if (isValid) {
        if (newPassword == confirmpassword) {
          user.password = await bcrypt.hash(newPassword, 10);
          await user.save();
          console.log("Password Changed.");
          return res.redirect('/logout');
        } else {
          console.log("new password and confirm password not match.");
          return res.redirect(req.get('Referrer') || '/');
        }
      } else {
        console.log("current password not match.");
        return res.redirect(req.get('Referrer') || '/');
      }

    } catch (error) {
      console.log(error.message);
      return res.redirect(req.get('Referrer') || '/');
    }
  }
}

export default adminController;