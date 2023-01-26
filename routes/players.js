var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/isLoggedIn');
const playersCtrl = require('../controllers/players');

router.get('/', playersCtrl.index)
router.get('/new', playersCtrl.new)
router.post('/', playersCtrl.create)

module.exports = router;