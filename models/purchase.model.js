import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "productbl", 
        required: true
    },
    quantity: {
        type: Number, 
        required: true
    },
    purchasePrice: {
        type: Number, 
        required: true
    },
    supplierName: {
        type: String
    },
    date: {
        type: Date, default: Date.now
    },
});

const Purchase = mongoose.model("purchase", purchaseSchema);
export default Purchase;
