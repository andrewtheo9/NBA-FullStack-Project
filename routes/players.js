var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/isLoggedIn');
const playersCtrl = require('../controllers/players');

router.get('/', playersCtrl.index)
router.get('/new', isLoggedIn, playersCtrl.new)
router.get('/:id', playersCtrl.show)
router.post('/', isLoggedIn, playersCtrl.create)

module.exports = router;