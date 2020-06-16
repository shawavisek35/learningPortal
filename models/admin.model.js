const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define your schema hare
const Admin = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    userType:{
        type: String,
        default: "admin"
    },
    gender: {
        type: String
    },
    mobile: {
        type: Number
    },
    address: {
        type: String
    },
    collegeName:{
        type: String,

    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    accountCreated: {
        type: Date,
        default: Date.now()
    }

});



const Admins = mongoose.model("Admins",Admin);
module.exports = Admins;