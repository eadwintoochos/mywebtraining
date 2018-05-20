var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',page:'index' });
});

/* GET Stock page. */
router.get('/stock', function(req, res, next) {
  res.render('stockpage', { title: 'Express',page:'stock' });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contactus', { title: 'Express',page:'contact' });
});

/* GET About us page. */
router.get('/about', function(req, res, next) {
  res.render('aboutus', { title: 'Express',page:'about' });
});

module.exports = router;
