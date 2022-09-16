const express = require("express");
require("./models/dbConfig");


const cors = require("cors");

const badgeTimeRoutes = require("./routes/badgeTime")
const userRoutes = require("./routes/user");

const app = express();

// MIDDLEWARES

//to extract json body request
app.use(express.json());

// //alowed Cross Origin requests

const corsOptions ={
   origin:true, 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

//use router
app.use('/api/badge-time', badgeTimeRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
