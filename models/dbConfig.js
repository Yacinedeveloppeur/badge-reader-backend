//import mongoose package
const mongoose = require("mongoose");

//connect to database
mongoose
  .connect(process.env.DB_URL || "mongodb+srv://maxpower:maxpower994@cluster0.cvvqvz2.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch(() => {
    console.log("Connexion à MongoDB échouée !");
  });
