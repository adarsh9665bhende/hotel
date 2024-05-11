const mongoose = require("mongoose");
require('dotenv').config();
//const mongoURL = process.env.MONGO_URL_LOCAL;
const mongoURL = process.env.MONGO_URL;

// mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUndefinedTopology: true
// })
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const db = mongoose.connection ;
db.on('connected',()=>{
    console.log("Connection Established to mongodb server");
})
db.on('error',(err)=>{
    console.log("Error  Establishing to mongodb server");
})
db.on('disonnected',()=>{
    console.log("Connection Disconnected from mongodb server");
})


module.exports = {db}