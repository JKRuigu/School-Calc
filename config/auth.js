const router = require('express').Router();
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('./keys');

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
User.getUserById(id, function(err, user) {
    done(err, user);
});
});

//USER REGISTRATION
router.post('/registration',(req,res) =>{

  const {username,password,isAdmin} = req.body;

  User.find({username: username}, (err, previousUsers) => {
    if (err || previousUsers.length > 0) {
      return res.status(404).json({error:'Server error or Invalid input'});
    }
    const newUser = new User();
    newUser.username = username;
    newUser.isAdmin = isAdmin;    
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.status(404).json({error:'Server error'});
      }else{
        return res.send({
          success: true,
          message: 'Signed up'
        });
      }      
    });
  });
});


//LOGIN AND GET JWT TOKEN
router.post('/login',(req,res) =>{

    const {username,password} = req.body.data;

    if (!username || !password) {
      res.status(404).json({error:'Please add a username and password'});
    }else {
      User.find({username: username}, (err, users) => {
        if (err) {
          res.status(404).json({error:'An Error occurred'});
        }
        if (!users || users.length != 1) {          
          res.status(404).json({error:'Invalid username or password'});
        }else{
          const user = users[0];
          if (!user.validPassword(password)) {
            res.status(404).json({error:'Invalid username or password'});
          }else{
            jwt.sign({user},keys.jsonwebtoken.clientSecret, (err, token) => {
              res.json({
                  token
              });
            });
          }
        }       
      });
    }
});

//VERIFY TOKEN
router.get('/verify', verifyToken, (req, res) => {
  jwt.verify(req.token,keys.jsonwebtoken.clientSecret, (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        authData
      });
    }
  });
});

//VERIFY TOKEN FUNCTION
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;