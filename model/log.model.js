const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    fixed: {
        type: Boolean,
        default: false,
        required: true
    },
    technician: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Log = mongoose.model("Log", LogSchema);
module.exports = Log;