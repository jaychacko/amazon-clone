var router = require('express').Router();
var User = require('../models/users');

// var user  = new User();
// console.log('user',user.profile.name);
router.post('/signup', function(req, res, next) {
    var user = new User();
  
    user.profile.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
  
    User.findOne({ email: req.body.email }, function(err, existingUser) {
  
      if (existingUser) {
        return res.redirect('/signup');
      } else {
        user.save(function(err, user) {
          if (err) return next(err);
          res.json("New user has been created");
    
        });
      }
    });
  });


module.exports = router;

//res.json("New user has been created")
