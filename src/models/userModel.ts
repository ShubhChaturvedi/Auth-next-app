import mongoose from "mongoose";


const UserModel = new mongoose.Schema({
    username : {
        type: String,
        require: [true, "Please provide an username"],
        unique: true,
    },
    email : {
        type: String,
        require: [true, "Please provide an email"],
        unique: true,
    },
    password : {
        type: String,
        require: [true, "Please provide a password"],
    },
    isVerified : {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model("users", UserModel);

export default User;