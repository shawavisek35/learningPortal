const express = require("express");
const router = express.Router();

const Students = require("../../models/student.model");
const Users = require("../../models/user.model");
const bcrypt = require("bcryptjs");

router.post("/register",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobile = req.body.mobile;
    const gender = req.body.gender;
    const address = req.body.address;
    const collegeName = req.body.collegeName;
    const passingYear = req.body.passingYear;

    const Student = new Students({
        username : username,
        firstName : firstName,
        lastName : lastName,
        mobile : mobile,
        address : address,
        gender : gender,
        collegeName : collegeName,
        passingYear : passingYear
    });

    const User = new Users({
        username : username,
        password : password,
        userType : "student"
    });

    bcrypt.genSalt(10 , (err,salt) => {
        bcrypt.hash(User.password, salt , (err,hash) => {
            if(err){
                console.log(err);
            }
            else{
                User.password = hash;
                User.save()
                .then(() => console.log("user created"))
                .catch(err => console.log(err));
            }
        })
    });

    Student.save()
    .then(() => {
        res.json({
            message : "Student Created."
        })
    })
    .catch((err) => console.log(err));

    


});

module.exports = router;