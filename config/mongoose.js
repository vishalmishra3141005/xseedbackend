

const mongoose = require("mongoose");


const USERNAME = process.env.MONGOOSE_USERNAME;
const PASSWORD = process.env.MONGOOSE_PASSWORD;

const databaseUrl = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.fx6nz4d.mongodb.net/`;

const databaseName = "xseed";


mongoose.connect(`${databaseUrl}${databaseName}`);

const db = mongoose.connection;

db.once("open", () => {
    console.log("database connected");
});


db.on("error", (err) => {
    console.log("error - " + err);
});


module.exports = db;