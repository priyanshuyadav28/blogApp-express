
const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

// import routes
const blog = require("./routes/blog");

// mount the route
app.use("/api/v1", blog);

// import database connection file 
const connectWithDb = require("./config/database");
connectWithDb();

// start the server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get("/", (req, res) => {
    res.send(`<h1>This is homepage from index.js...</h1>`)
})