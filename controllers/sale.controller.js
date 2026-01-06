import Sale from "../models/sale.model.js";
import Product from "../models/product.model.js";

const saleController = {

    // sale form page
    async addSalePage(req, res) {
        const products = await Product.find({});
        return res.render("./pages/add-sale.ejs", { products });
    },

    // save sale
    async addSale(req, res) {
        try {
            await Sale.create(req.body);
            return res.redirect("/sales/view");
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get("Referrer"));
        }
    },

    // view all sales
    async viewSale(req, res) {
        try {
            const sales = await Sale.find({})
                .populate("product");
            return res.render("./pages/view-sale.ejs", { sales });
        } catch (error) {
            console.log(error.message);
            return res.render("./pages/view-sale.ejs", { sales: [] });
        }
    },
    async editSalePage(req, res) {
        try {
            const { id } = req.params;
            const sale = await Sale.findById(id).populate('product');
            const products = await Product.find({});
            res.render('./pages/edit-sale.ejs', { sale, products });
        } catch (error) {
            console.log(error.message);
            res.redirect('/sales/view');
        }
    },

    // Update Sale
    async editSale(req, res) {
        try {
            const { id } = req.params;
            await Sale.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
            res.redirect('/sales/view');
        } catch (error) {
            console.log(error.message);
            res.redirect('/sales/view');
        }
    },

    // Delete Sale
    async deleteSale(req, res) {
        try {
            const { id } = req.params;
            await Sale.findByIdAndDelete(id);
            res.redirect('/sales/view');
        } catch (error) {
            console.log(error.message);
            res.redirect('/sales/view');
        }
    }

};

export default saleController;