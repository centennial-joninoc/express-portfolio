/**
 * Student Name: John Celso Inocente
 * Student ID: 301 332 723
 * Date: September 27, 2023
 * Filename: index.js
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Fishbone Studios' });
});

/* POST contact page */
router.post('/', function(req, res, next) {
  res.render('pages/index', { title: 'Fishbone Studios'});
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('pages/about', { title: 'Fishbone Studios | About' });
});

/* GET projects page. */
router.get('/projects', function(req, res) {
  res.render('pages/projects', { title: 'Fishbone Studios | Projects' });
});

/* GET services page. */
router.get('/services', function(req, res) {
  res.render('pages/services', { title: 'Fishbone Studios | Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('pages/contact', { title: 'Fishbone Studios | Contact' });
});

module.exports = router;
