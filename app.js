const express = require("express");
require("./models/dbConfig");
const BadgeTime = require("./models/badgeTime");

const app = express();

// MIDDLEWARES

//to extract json body request
app.use(express.json());

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

//generate badge-time
app.post("/api/badge-time", (req, res, next) => {
  delete req.body._id;
  const badgeTime = new BadgeTime({
    userId: req.body.userId,
  })
  badgeTime.save()
    .then(() => { res.status(201).json({message: 'Badgage enregistré'}), console.log('OK')})
    .catch((error) => { res.status(401).json({error}), console.log(error)})
});

//get badge-times
app.get("/api/badge-time", (req, res, next) => {
  BadgeTime.find()
    .then((badgeTimes) => { res.status(200).json(badgeTimes)})
    .catch((error) => { res.status(400).json({error})})
});

//get one badge-time
app.get("/api/badge-time/:id", (req, res, next) => {
  BadgeTime.findOne({_id: req.params.id})
  .then((badgeTime) => {res.status(200).json(badgeTime)})
  .catch((error)=> {res.status(404).json({ error })})
})

//update badge-time
app.put("/api/badge-time/:id", (req, res, next) => {
  BadgeTime.updateOne({ _id: req.params.id},  { ...req.body, _id: req.params.id })
    .then(()=>{res.status(200).json({message: 'badgage modifié !'})})
    .catch((error)=> { res.status(400).json({error})})
})

module.exports = app;
