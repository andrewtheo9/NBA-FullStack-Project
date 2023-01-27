const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/isLoggedIn')

router.post('/players/:id/comments', isLoggedIn, commentsCtrl.create)
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete);



module.exports = router;