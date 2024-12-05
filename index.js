const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userApi')

const server = express()
server.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

server.use(bodyParser.json())
server.use('/api',userRoutes)

mongoose.connect('mongodb+srv://root:sDQvJjx5BqK6vs8v@cluster0.bsvjo.mongodb.net/').then(()=>{
    console.log("DB Connected !!")
}).catch((error)=>{
    console.log("Error while connecting the database:"+error.message)
})




server.listen(8055,()=>{
    console.log("Server started listening on port 8055")
})