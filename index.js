const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userApi')

const server = express()
server.use(cors())

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
    next();
});

// Handle preflight requests
server.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

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