var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
	//res.render('hotels', { title: 'Hotel List' });
	
	var db = req.db;
	var collection = db.get('hotelcollection');
	collection.find({},{},function(e,docs){
		res.render('hotellist', {
			'hotellist': docs
		});
	});
	
});

module.exports = router;
