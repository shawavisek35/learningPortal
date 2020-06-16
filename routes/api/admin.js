const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Admins = require("../../models/admin.model");
const Users = require("../../models/user.model");

router.post("/register",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobile = req.body.mobile;
    const gender = req.body.gender;
    const address = req.body.address;
    const collegeName = req.body.collegeName;

    const Admin = new Admins({
        username : username,
        firstName : firstName,
        lastName : lastName,
        mobile : mobile,
        address : address,
        gender : gender,
        collegeName : collegeName,
    });

    const User = new Users({
        username : username,
        password : password,
        userType : "admin"
    });

    bcrypt.genSalt(10 , (err,salt)=> {
        bcrypt.hash(User.password , salt , (err,hash) => {
            if(err){
                res.json("An Error Occured...");
            }
            else{
                User.password = hash;
                User.save()
                .then(() => console.log("User Created...."))
                .catch(err => console.log("An error occured"));
            }
        })
    });

    Admin.save()
    .then(() => {
        res.json({
            message : "Admin successfully created . Login to continue"
        });

    })
    .catch(err => res.json("An error occured...."));


});

module.exports = router;