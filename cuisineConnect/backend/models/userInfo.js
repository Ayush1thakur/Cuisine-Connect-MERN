const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    Height: {
        type: Number,
        required: true
    },
    Weight: {
        type: Number,
        required: true
    },
});

const UserInfo = mongoose.model('person', personSchema);
module.exports = UserInfo;
