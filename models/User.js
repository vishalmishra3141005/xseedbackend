

const mongoose = require("mongoose");

const User = mongoose.model("user", new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true,}));


module.exports = User;