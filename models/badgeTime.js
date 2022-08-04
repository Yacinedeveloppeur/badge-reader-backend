const mongoose = require("mongoose");

// Schema config to create a badgeTime
const badgeTimeSchema = mongoose.Schema({
  badgeTime: { type: Date, default: new Date().toLocaleString("fr-FR", {timeZone: "Europe/Paris"})},
  userID: {type: String, required: true}
});

module.exports = mongoose.model("BadgeTime", badgeTimeSchema);

