var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.get('/userlist', function(req, res) {

	User.find(function(err, users) {
		if (err) {
			return console.error(err);
		} else {
			res.json(users);
		}
	});
	
});

/*
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection. = db('usercollection');
  
	collection.find({},{},function(e,docs){
		if (!docs) {
			res.send('User list is empty');
		} else {
  		res.render('userlist', {
  		"userlist" : docs
  		});
		}
	});

});*/

module.exports = router;
