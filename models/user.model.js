const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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


module.exports.getUserByUsername = function(username,callback){
    var query = {username : username};
    Users.findOne(query,callback);

};

module.exports.getUserById = function(id,callback){
    Users.findById(id,callback); 
};

module.exports.comparedPassword = function(candidateKey,hash,callback){
    bcrypt.compare(candidateKey,hash,function(err,isMatch){
            if(err) throw err;
            callback(null,isMatch);
})};