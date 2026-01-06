import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "productbl",
        required: true 
    },
    quantity: { 
        type: Number,
        required: true 
    },
    sellingPrice: { 
        type: Number,
        required: true 
    },
    customerName: { 
        type: String 
    },
    date: { 
        type: Date,
        default: Date.now 
    },
});

const Sale = mongoose.model("sale", saleSchema);

export default Sale;