const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define your schema hare
const User = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },

    userType: {
        type: String
    }

});

//Function for User

const Users = mongoose.model("Users",User);
module.exports = Users;