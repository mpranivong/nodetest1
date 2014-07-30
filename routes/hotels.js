var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
	//res.render('hotels', { title: 'Hotel List' });
	
	var db = req.db;
	var collection = db.get('hotelcollection');
	collection.find({},{},function(e,docs){
		
		//if (!docs) {
		//	res.send('User data empty');
		//} else {
			res.render('hotels', {
				'hotellist': docs
			});
		//}
	});
	
});

// http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4
//search for hotels by city,state
express.post('/searchhotel', function(req,res){
	console.log(req.body);
});

module.exports = router;
