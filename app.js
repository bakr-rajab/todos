const express =require('express');
const app=express();
const helmet=require('helmet')
const morgan=require('morgan')
require('dotenv').config();
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

// const userRoutes=require('./routes/users')
// const authRoutes=require('./routes/auth')
const todoRoutes=require('./routes/todos')

const cors=require('cors')

const path = require('path')
const publicDirectory=path.join(__dirname, '/public');

// middleware
app.use(bodyParser.json())
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors())

//setup static path
// app.use(express.static(publicDirectory))

app.use((err,req,res,next) => {
    res.status(500).json({message:err.message});
})

// app.use('/users',userRoutes)
// app.use('/auth',authRoutes)
app.use('/todos',todoRoutes)

app.get('/',(req,res)=>{
    
    // console.log(path);
    res.json(publicDirectory);
})
mongoose.connect(process.env.LOCAL_DB||`mongodb://127.0.0.1:27017/todos`,{useNewUrlParser:true}, (err, db)=>{
    if(!err)
    {
        app.listen(process.env.PORT||5000,()=>{
            console.log('Bakend is runing On %s',process.env.PORT||5000);
        })
        console.log('db connection successful ...');
    }
    else console.warn('db connection errors ...');
})


