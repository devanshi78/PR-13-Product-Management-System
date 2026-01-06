import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum : ["admin","user"],
        default: "user"
    }

}, {
    timestamps: true
})

const User = mongoose.model('usermodel', userschema);

export default User;