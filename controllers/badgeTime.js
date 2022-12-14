const BadgeTime = require('../models/badgeTime');
//import moment to format date
const moment = require("moment");
const momentTimezone = require("moment-timezone");

let dateFr ='';

function generateFormatedDate() {
  moment.locale('fr');
  let date = moment();
  dateFr = momentTimezone.tz(date, 'YYYY-MM-DD HH:mm:ss', 'Europe/Paris')
  return dateFr.format('YYYY-MM-DD HH:mm:ss')
};


exports.createBadgeTime = (req, res, next) => {
    let formatedDate = generateFormatedDate();
    const badgeTime = new BadgeTime({
      userId: req.auth.userId,
      userEmail: req.auth.userEmail,
      badgeTime: formatedDate
    })
    badgeTime.save()
      .then(() => { res.status(201).json({message: 'Badgage enregistré'})})
      .catch((error) => { res.status(401).json({error})})
  };

exports.getAllBadgeTimes = (req, res, next) => {
    BadgeTime.find({userId: req.auth.userId})
      .then((badgeTimes) => { res.status(200).json(badgeTimes)})
      .catch((error) => { res.status(400).json({error})})
  };

  exports.getOneBadgeTime = (req, res, next) => {
    BadgeTime.findOne({_id: req.params.id})
    .then((badgeTime) => {res.status(200).json(badgeTime)})
    .catch((error)=> {res.status(404).json({ error })})
  };

  exports.updateBadgeTime = (req, res, next) => {
    BadgeTime.updateOne({ _id: req.params.id},  { ...req.body, _id: req.params.id, userId: req.auth.userId, userEmail: req.auth.userEmail})
      .then(()=>{res.status(200).json({message: 'badgage modifié !'})})
      .catch((error)=> { res.status(400).json({error})})
  };

  exports.deleteBadgeTime = (req, res, next) => {
    BadgeTime.deleteOne({_id: req.params.id})
    .then(()=>{res.status(200).json({ message: 'Badgage supprimé !'})})
    .catch((error)=>{res.status(400).json({ error })})
  };

