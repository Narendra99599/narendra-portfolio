const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required : true,
    },
    subject : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true,
    }
})

module.exports.UserData = mongoose.model("UserData",UserDataSchema);