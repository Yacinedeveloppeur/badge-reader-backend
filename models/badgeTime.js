const mongoose = require("mongoose");
//import moment to format date
const moment = require("moment");

function generateFormatedDate() {
  moment.locale('fr');
  return moment().format('LLLL'); // 'Freitag, 24. Juni 2016 01:42'
};


let formatedDate = generateFormatedDate();

// Schema config to create a badgeTime
const badgeTimeSchema = mongoose.Schema({
  badgeTime: { type: String, default: formatedDate},
  userId: {type: String, required: true}
});

module.exports = mongoose.model("BadgeTime", badgeTimeSchema);

