const express = require("express");
require("./models/dbConfig");

const badgeTimeRoutes = require("./routes/badgeTime")
const userRoutes = require("./routes/user");

const app = express();

// MIDDLEWARES

//to extract json body request
app.use(express.json());

//alowed Cross Origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, x-xsrf-token"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//use router
app.use('/api/badge-time', badgeTimeRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
