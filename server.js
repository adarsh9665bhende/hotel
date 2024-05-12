var express = require('express');
var app = express();
const db = require('./db');
const bodyparser = require('body-parser');
require('dotenv').config();
app.use(bodyparser.json());
 
app.get('/', function (req, res) {
res.send("Welocme to GeeksforGeeks!");
});
app.get('/login',(req,res)=>{
    res.send("Your are loged in");
});
app.get('/adarsh',(req,res)=>{
   
 res.send("yes you are adarsh:");
});
app.get('/data',(req,res)=>{
    const objectdata ={
        name:"adarsh",
        age:"22"
    };
    console.log("here");
    res.send(objectdata)
   
});

const personroute = require('./route/PersonRoutes');
app.use('/person',personroute);

const menuroute = require('./route/menuRoutes');
app.use('/menu',menuroute);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server listening on port 3000");
});
// comment for the testing purpose

