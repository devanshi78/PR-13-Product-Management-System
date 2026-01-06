import User from "../models/user.model.js";
import Product from "../models/product.model.js";

const userController = {

  // USER DASHBOARD (optional)
  async dashboard(req, res) {
    try {
      const products = await Product.find().populate("category"); // fetch products
      return res.render("client/user-product", {
        products,   // now products is defined
        user: req.user
      });
    } catch (error) {
      console.log(error.message);
      return res.render("client/user-product", {
        products: [],  // fallback to empty array
        user: req.user
      });
    }
  },

  // USER PROFILE PAGE
  async profilePage(req, res) {
    try {
      const user = await User.findById(req.user.id);

      return res.render("client/profile", {
        user
      });

    } catch (error) {
      console.log(error.message);
      return res.redirect("/");
    }
  },

  // USER LOGOUT
  logout(req, res) {
    res.clearCookie("token");
    return res.redirect("/login");
  }

};

export default userController;