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
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


app.get('/', (req, res, next) => {
   res.status(200).json({
       status: 'success',
       data: {
           name: 'Badge-Reader API',
           version: '0.1.0'
       }
   });
});

//use router
app.use('/api/badge-time', badgeTimeRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
