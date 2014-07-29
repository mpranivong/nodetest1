var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  
	collection.find({},{},function(e,docs){
		if (!docs) {
			res.send('User data empty');
		} else {
  		res.render('userlist', {
  		"userlist" : docs
  		});
		}
	});

});

module.exports = router;
