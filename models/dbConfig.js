//import mongoose package
const mongoose = require("mongoose");

//if you want run this API on local, replace process.env.DB_URL by your mongoDb address : EXAMPLE : mongodb+srv://<user>:<password>@cluster0.cvvqvz2.mongodb.net/?retryWrites=true&w=majority
//if you want deploy your API on heroku like me, go to heroku, Settings, Config Vars and create a var DB_URL with your mongoDb address.

//connect to database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch(() => {
    console.log("Connexion à MongoDB échouée !");
  });
