//import express package
const express = require("express");
//import database configuration
require("./models/dbConfig");
//import model to create a badge
const BadgeTime = require("./models/badgeTime");

//create express app
const app = express();

//to extract json body request
app.use(express.json());

//middlewares to handle requests

//alowed Cross Origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//generate timer

app.post("/api/badge-time", (req, res, next) => {
  delete req.body._id;
  const badgeTime = new BadgeTime({
    userId: req.body.userId
  })
  badgeTime.save()
    .then(() => { res.status(201).json({message: 'Badgage enregistré'})})
    .catch(() => { res.status(401).json({error})})
});

app.get("/api/badge-time", (req, res, next) => {
  BadgeTime.find()
    .then((badgeTimes) => { res.status(200).json(badgeTimes)})
    .catch((error) => { res.status(400).json({error})})
});

//export app
module.exports = app;
