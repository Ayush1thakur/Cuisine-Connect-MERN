const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/CuisineConnect";

// Set up connection
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("MongoDB connected");
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});

db.on('error', (err) => {
    console.log("MongoDB faces some error: ", err);
});

module.exports = db;
