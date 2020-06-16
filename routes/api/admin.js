const express = require("express");
const router = express.Router();

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
    const organizationName = req.body.organizationName;

    const Admin = new Admins({
        username : username,
        firstName : firstName,
        lastName : lastName,
        mobile : mobile,
        address : address,
        gender : gender,
        organizationName : organizationName,
    });

    const User = new Users({
        username : username,
        password : password,
        userType : "admin"
    });


});

module.exports = router;