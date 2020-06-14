//requiring modules
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");


//Middlewares
app.use(bodyParser.json());




//Connections

const db = require("./config/mongo_keys.js").mongoURI;

mongoose.connect(db , {useNewUrlParser : true , useUnifiedTopology: true})
.then(()=> console.log("Mongodb Connected....."))
.catch((err)=> console.log("Error : " , err));

const port = process.env.PORT || 5000;
app.listen(port, (err)=>{
    if(!err){
        console.log(`Server Started on port : ${port}`);
    }
    else{
        console.log("Error : ",err);
    }
});