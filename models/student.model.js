const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define your schema hare
const Student = new Schema({
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
        default: "student"
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
    passingYear: {
        type: Number
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



const Students = mongoose.model("Students",Student);
module.exports = Students;