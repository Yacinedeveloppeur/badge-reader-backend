//import express package
const express = require("express");

//create express app
const app = express();

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

app.get("/api/timers", (req, res, next) => {
  const timers = [
    {
      _id: "afzfojofz",
      enter: "8h",
      lunchBreak: "12h",
      endLunchBreak: "13h",
      exit: "17h",
    },
  ];
  res.status(200).json(timers);
});

//export app
module.exports = app;
