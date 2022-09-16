const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

//use controller
const badgeTimeCtrl = require('../controllers/badgeTime');

router.post("/", auth, badgeTimeCtrl.createBadgeTime);
router.get("/",  auth, badgeTimeCtrl.getAllBadgeTimes);
router.get("/:id", auth, badgeTimeCtrl.getOneBadgeTime);
router.put("/:id", auth, badgeTimeCtrl.updateBadgeTime);
router.delete("/:id", auth, badgeTimeCtrl.deleteBadgeTime);

module.exports = router;