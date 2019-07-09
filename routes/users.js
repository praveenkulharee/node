var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a reso');
});

router.new = function(req,res,next){
res.send('new nodes');
};

module.exports = router;
