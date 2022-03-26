const { default: strictTransportSecurity } = require('helmet/dist/middlewares/strict-transport-security');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 9,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type:String,
        default: "password",
        min: 6,
        max: 9,
    },
    profileImg:{
        type:String,
        default:''
    },
    coverImg:{
        type:String,
        default:""
    },
    followes:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model('User',userSchema);
