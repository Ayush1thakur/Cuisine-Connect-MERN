const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
});

// create person model
const ValidUser = mongoose.model('person', personSchema);
module.exports = Person;
