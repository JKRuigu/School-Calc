const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const userAuth = require('./config/auth');
require('dotenv').config();

server = express();

//DB CONNECTION
mongoose.connect('mongodb://localhost/mySchool-accounts',{ useNewUrlParser:true},()=>{
  console.log('connected to mongodb');
});
var db = mongoose.connection;

//INTIALIZING BODY_PARSER
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

//INTIALIZING PASSPORT
server.use(passport.initialize());
// PERSISTENT LOGIN SESSIONS
server.use(passport.session()); 

server.use('/auth',userAuth);

const port = process.env.PORT || 8080;

server.listen(port,()=>{console.log(`Server started on port ${port}`);
})