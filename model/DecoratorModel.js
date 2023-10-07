const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DecoratorSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default : 0
    },
    budget:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('decorator',DecoratorSchema)