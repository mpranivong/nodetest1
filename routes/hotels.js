var express = require('express');
var router = express.Router();

//var Hotel = require('models/hotel');
	
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
//express.post('/searchhotel', function(req,res){
//	console.log(req.body);
//});

router.post('/searchhotel', function(req,res) {

    // If it worked, set the header so the address bar doesn't still say /searchhotel
    res.location("/hotels");
    // And forward to success page
    res.redirect("/hotels");
	
});

router.post('/addhotel', function(req,res) {
	
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var hotelName = req.body.hotelname;
    var hotelUrl = req.body.hotelurl;

    // Set our collection
    var collection = db.get('hotelcollection');

    // Submit to the DB
    collection.insert({
        "hotelname" : hotelName,
        "hotelurl" : hotelUrl
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /searchhotel
            res.location("/hotels");
            // And forward to success page
            res.redirect("/hotels");
        }
    });	

});

module.exports = router;
