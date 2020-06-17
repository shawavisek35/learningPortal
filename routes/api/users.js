const express = require("express");
const route = express.Router();
const passport = require("passport")
const localStrategy = require("passport-local").Strategy;

//add your routes here

const User = require("../../models/user.model");

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        console.log("logged in");
            return next();
    }
    else{
            res.json('Please log in to continue');
    }
}
function isLoggedOut(req,res,next){
    if(!req.isAuthenticated()){
            console.log("Log in to continue...");
            return next();
    }
    else{
            res.json('Logged in');
    }
}


passport.use(new localStrategy(function(username,password,done){
       
    User.getUserByUsername(username,function(err,user){
            if(err) throw err;
            if(!user){
                    return done(null,false,{message : 'Unknown User'});

            }

            User.comparedPassword(password,user.password,function(err,isMatch){
                    if(err) throw err;
                    if(isMatch){
                            
                            
                            return done(null,user);
                            
                    }
                    else{
                            return done(null,false,{message : 'Invalid passpword'})
                    }
            });
    });
})
);


passport.serializeUser(function(user, done) {

    console.log('userId: '+user._id);
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
    done(err, user);
    });
});


route.post('/login',passport.authenticate('local',
    { successRedirect: console.log("logged in"),
    failureRedirect: console.log("Unable to log in")
    }),
    function(req,res){
    res.json('Logged in');
});

route.get("/" , (req,res) => {
    res.json(req.user.username);
})


route.get('/logout',isLoggedIn,function(req,res){

    console.log(req.user.username);
    req.logout();
    user = null;
    res.json('Logged out');
    
});

module.exports = route;