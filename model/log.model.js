const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    attention: {
        type: Boolean,
        default: false,
        required: true
    },
    technician:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

const Log = mongoose.model("Log", LogSchema);
module.exports = Log;