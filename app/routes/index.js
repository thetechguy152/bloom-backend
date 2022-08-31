const express = require("express");
const router = express.Router();
const authuser = require("./auth.routes");
const userRoles = require("./role.routes");
const userData = require("./user.data.routes");
const analytics = require("./analytics.routes");

router.use('/authuser', authuser);
router.use('/userRoles', userRoles);
router.use('/userData', userData);
router.use('/analytics', analytics);
module.exports = router;