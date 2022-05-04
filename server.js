var express = require("express");
var path = require("path");
const Keys = require("./config/Keys");

var apisRouter = require("./router/api");

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/apis",apisRouter);

app.listen(Keys.port, ()=>{
    console.log("Listening on port " + Keys.port);
})

module.exports = app;