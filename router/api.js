var express= require("express");
var Router = express.Router();

Router.post("/register", (req,res) =>{
    res.send("Hello");
})

module.exports = Router;