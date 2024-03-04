const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express = require('express');
const cookieParser = require('cookie-parser')
const cors=require('cors');
dotenv.config({path:'./config.env'})
require("./db/conn");
const app = express();
const PORT=process.env.PORT;

app.use(cors(
    {    
         origin:["https://65e5427442cf7e10e91f96af--resilient-wisp-bc948a.netlify.app"],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use(express.json());
app.use(cookieParser());

app.use(require('./router/auth'));
const middleware=(req,res,next)=>{
    next();
}



app.listen(PORT,()=>{
console.log(`server is running at port no ${PORT}`);
})
