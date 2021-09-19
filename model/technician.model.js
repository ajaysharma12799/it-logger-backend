const mongoose = require("mongoose");

const TechnicianSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

const User = mongoose.model("User", TechnicianSchema);
module.exports = User;