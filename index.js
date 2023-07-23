

require("dotenv").config();

const express = require("express");

const mongooseConfig = require("./config/mongoose");

const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors({
    origin: "*"
}));

app.use(express.urlencoded({extended: true}));
app.use("/", require("./routes"));


app.listen(PORT, (err) => {
    if (err) {
        console.log("Unable to start server");
    }
    console.log(`Server up and running at ${PORT}`);
});