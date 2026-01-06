import Purchase from "../models/purchase.model.js";
import Product from "../models/product.model.js";

const purchaseController = {

    // Add Purchase Page
    async addPurchasePage(req, res) {
        const products = await Product.find({});
        return res.render("./pages/add-purchase.ejs", { products });
    },

    // Save Purchase
    async addPurchase(req, res) {
        try {
            await Purchase.create(req.body);
            return res.redirect("/purchases/view");
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get("Referrer"));
        }
    },

    // View all purchases
    async viewPurchase(req, res) {
        try {
            const purchases = await Purchase.find({})
                .populate("product");
            return res.render("./pages/view-purchase.ejs", { purchases });
        } catch (error) {
            console.log(error.message);
            return res.render("./pages/view-purchase.ejs", { purchases: [] });
        }
    },

    // Edit Purchase Page
    async editPurchasePage(req, res) {
        try {
            const { id } = req.params;
            const purchase = await Purchase.findById(id).populate('product');
            const products = await Product.find({});
            res.render("./pages/edit-purchase.ejs", { purchase, products });
        } catch (error) {
            console.log(error.message);
            res.redirect("/purchases/view");
        }
    },

    // Update Purchase
    async editPurchase(req, res) {
        try {
            const { id } = req.params;
            await Purchase.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
            res.redirect("/purchases/view");
        } catch (error) {
            console.log(error.message);
            res.redirect("/purchases/view");
        }
    },

    // Delete Purchase
    async deletePurchase(req, res) {
        try {
            const { id } = req.params;
            await Purchase.findByIdAndDelete(id);
            res.redirect("/purchases/view");
        } catch (error) {
            console.log(error.message);
            res.redirect("/purchases/view");
        }
    }

};

export default purchaseController;