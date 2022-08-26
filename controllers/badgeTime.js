const BadgeTime = require('../models/badgeTime');

exports.createBadgeTime = (req, res, next) => {
    delete req.body._id;
    const badgeTime = new BadgeTime({
      userId: req.body.userId,
    })
    badgeTime.save()
      .then(() => { res.status(201).json({message: 'Badgage enregistré'})})
      .catch((error) => { res.status(401).json({error}), console.log(error)})
  };

exports.getAllBadgeTimes = (req, res, next) => {
    BadgeTime.find()
      .then((badgeTimes) => { res.status(200).json(badgeTimes)})
      .catch((error) => { res.status(400).json({error})})
  };

  exports.getOneBadgeTime = (req, res, next) => {
    BadgeTime.findOne({_id: req.params.id})
    .then((badgeTime) => {res.status(200).json(badgeTime)})
    .catch((error)=> {res.status(404).json({ error })})
  };

  exports.updateBadgeTime = (req, res, next) => {
    BadgeTime.updateOne({ _id: req.params.id},  { ...req.body, _id: req.params.id })
      .then(()=>{res.status(200).json({message: 'badgage modifié !'})})
      .catch((error)=> { res.status(400).json({error})})
  };

  exports.deleteBadgeTime = (req, res, next) => {
    BadgeTime.deleteOne({_id: req.params.id})
    .then(()=>{res.status(200).json({ message: 'Badgage supprimé !'})})
    .catch(()=>{res.status(400).json({ error })})
  };

