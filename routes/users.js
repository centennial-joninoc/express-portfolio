/**
 * Student Name: John Celso Inocente
 * Student ID: 301 332 723
 * Date: September 27, 2023
 * Filename: users.js
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
