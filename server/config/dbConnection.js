const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.MONGODB_URL;

const dbConnect = ()=>{
    mongoose.connect(dbURL)
        .then(()=> console.log("db connected successfully"))
        .catch(error => console.log("error occurred while connecting to databasae",error.message));
}

module.exports.dbConnect = dbConnect;