var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/isLoggedIn');
const playersCtrl = require('../controllers/players');

router.get('/new', isLoggedIn, playersCtrl.new)

module.exports = router;