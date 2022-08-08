var express = require('express');
var router = express.Router();
var athletesCtrl = require('../controllers/athlete.controller')

/* GET home page. */
router.get('/index', athletesCtrl.new)
router.post('/index',isLoggedIn, athletesCtrl.createAthlete)
// router.post('/index/:id',athletesCtrl.addAthlete)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;