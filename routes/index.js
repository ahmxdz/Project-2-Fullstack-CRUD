var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Workout' });
});


module.exports = router;

var router = require('express').Router();
const passport = require('passport')

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/exercise');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email']}  
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/exercise',
    failureRedirect : '/exercise'
  }
))

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/exercise');
});
module.exports = router;