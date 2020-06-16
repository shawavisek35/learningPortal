const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define your schema hare
const Mentor = new Schema({
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
        default: "mentor"
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
    organizationName:{
        type: String,

    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    accountVerified: {
        type: Boolean,
        default: false
    },
    accountCreated: {
        type: Date,
        default: Date.now()
    }

});



const Mentors = mongoose.model("Mentors",Mentor);
module.exports = Mentors;