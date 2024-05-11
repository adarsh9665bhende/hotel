const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/mydb";

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