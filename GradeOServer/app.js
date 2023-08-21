//importing modules

var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const route = require('./route/route');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/Details');
//defining port number
const port = 2430;

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.get('/',(req,res)=>{
    res.send("Working");
});
app.listen(port,()=>{
    console.log("Listening@port:"+port);
});
