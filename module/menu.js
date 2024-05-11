const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:['breakfast','lunch','dinner'],
        default:"breakfast"
    },
    quantity:{
        type:Number,
        default:0
    },
    extra:{
        type:Boolean,
        default:true
    }
});

const menu = mongoose.model('menu',menuSchema);
module.exports = menu;