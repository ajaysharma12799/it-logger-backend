
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const techRoute = require("./routes/technician.route");
const logRoute = require("./routes/log.route");

const app = express();
if(process.env.NODE_ENV === "development") {
    require("dotenv").config();
}

const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/technicians", techRoute);
app.use("/api/logs", logRoute);

app.get("/", (req, res) => {
    res.send("Working Fine");
})

app.listen(PORT, () => {
    console.log(`Server Running ${PORT} Port`);
});