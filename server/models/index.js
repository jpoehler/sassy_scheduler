var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/views/routes/user.html',
        failureRedirect: '/views/index.html'
    })
);

router.get('/*', function(req,res,next){
  console.log(req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
