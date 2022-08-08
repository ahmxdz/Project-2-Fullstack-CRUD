var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('aboutus/index', {user: req.user, name: req.query.name, title: 'About Us' });
});

module.exports = router;