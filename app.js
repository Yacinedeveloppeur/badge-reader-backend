const express = require("express");
require("./models/dbConfig");


const cors = require("cors");

const badgeTimeRoutes = require("./routes/badgeTime")
const userRoutes = require("./routes/user");

const app = express();

// MIDDLEWARES

//to extract json body request
app.use(express.json());

// alowed Cross Origin requests for my frontend application.
// if you want use this API with your frontend application replace this origin value by your frontend application address.

const corsOptions ={
   origin:'https://benevolent-puffpuff-085317.netlify.app',
   credentials:true,            
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
