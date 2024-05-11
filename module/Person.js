
const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    age : {
        type: Number,
        required:true
    },
    profession:{
        type: String,
        enum: ['chef', 'waiter', 'cleaner'],
        required: true
    },
    experience:{
        type : Number,
        required:false,
        default:1
    },
    email:{
        type: String,
        required:true,
        unique : true
    }
})

const Person = mongoose.model('Person',PersonSchema);
module.exports = Person;