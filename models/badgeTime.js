const mongoose = require("mongoose");

// Schema config to create a badgeTime
const badgeTimeSchema = mongoose.Schema({
  badgeTime: { type: String, required: true},
  userId: {type: String, required: true},
  userEmail: {type: String, required: true}
});

module.exports = mongoose.model("BadgeTime", badgeTimeSchema);

