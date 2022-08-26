const express = require('express');
const router = express.Router();

//use controller
const badgeTimeCtrl = require('../controllers/badgeTime');

router.post("/", badgeTimeCtrl.createBadgeTime);
router.get("/", badgeTimeCtrl.getAllBadgeTimes);
router.get("/:id", badgeTimeCtrl.getOneBadgeTime);
router.put("/:id", badgeTimeCtrl.updateBadgeTime);
router.delete("/:id", badgeTimeCtrl.deleteBadgeTime);

module.exports = router;