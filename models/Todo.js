const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        min: 3,
    },
    status:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model('Todo',todoSchema);