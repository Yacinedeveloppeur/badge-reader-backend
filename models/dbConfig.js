//import mongoose package
const mongoose = require("mongoose");

//connect to database
mongoose
  .connect("mongodb://localhost:27017/badge-reader-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch(() => {
    console.log("Connexion à MongoDB échouée !");
  });
