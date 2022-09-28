//import mongoose package
const mongoose = require("mongoose");
const DB_PASSWORD = process.env.DB_PASSWORD;

//connect to database
mongoose
  .connect(`mongodb+srv://maxpower:${DB_PASSWORD}@cluster0.cvvqvz2.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch(() => {
    console.log("Connexion à MongoDB échouée !");
  });
