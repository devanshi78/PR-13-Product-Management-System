import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sku : {
        type : String,
        required : true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type : Number
    },
    brand: {
        type : String
    },
    modelNumber: {
        type : String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    subCategory: {
        type : String
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model('productbl',productSchema);

export default Product;