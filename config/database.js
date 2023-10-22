
const mongoose = require("mongoose");

require("dotenv").config();

const connenctWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log("Connected to Database Successfully");
    })
    .catch( (error) => {
        console.log("Error connection to the database");
        console.log(error);
        process.exit(1);
    })
}

module.exports = connenctWithDb;