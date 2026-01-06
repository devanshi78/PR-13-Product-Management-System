import Category from "../models/category.model.js";
import Product from "../models/product.model.js";
import fs from "fs"

const productController = ({
    async addProductPage(req, res) {
        const categories = await Category.find({});
        return res.render('./pages/add-product.ejs', {
            categories
        });
    },
    async addProduct(req, res) {
        try {
            req.body.image = req.file.path;
            let data = await Product.create(req.body)
            console.log(data);
            return res.redirect(req.get('Referrer') || '/');
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get('Referrer') || '/');
        }
    },
    async viewProduct(req, res) {
        try {
            const products = await Product
                .find({})
                .populate('category')
            return res.render('./pages/view-product.ejs', {
                products,
                user : req.user
            })
        } catch (error) {
            console.log(error.message);
            return res.render('./pages/view-product.ejs', {
                products: []
            })
        }
    },
    async productDetail(req, res) {
        try {
            const { id } = req.params;

            let product = await Product.findById(id)
                .populate('category')

            console.log(product);
            return res.render('./pages/product-detail.ejs', {
                product
            });

        } catch (error) {
            console.log(error.message);
        }
    },
    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const data = await Product.findByIdAndDelete(id);
            console.log(data);
            fs.unlinkSync(data.image);
            return res.redirect(req.get('Referrer') || '/');
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get('Referrer') || '/');
        }
    },
    async editProductPage(req, res) {
        try {
            const { id } = req.params;

            const data = await Product.findById(id);

            const categories = await Category.find({});

            res.render('./pages/edit-Product.ejs', {
                data,
                categories
            });

        } catch (error) {
            console.log(error.message);
            res.redirect('/product/view');
        }
    },
    async editProduct(req, res) {
        try {
            const { id } = req.params
            if (req.file) {
                req.body.image = req.file.path;
            }

            let data = await Product.findByIdAndUpdate(id, req.body);

            if (req.file) {
                fs.unlinkSync(data.image);
            }
            return res.redirect('/view-product');
        } catch (error) {
            console.log(error.message)
            return res.redirect(req.get('Referrer') || '/');
        }
    }
})

export default productController; 