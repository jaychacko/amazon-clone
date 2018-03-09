var express = require('express');
var morgan = require('morgan');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoLink = 'mongodb://root:123india@ds255308.mlab.com:55308/jaycommerce';
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');

mongoose.connect(mongoLink, function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log('connected to database')
    }
})

//mideleware
app.use(express.static(__dirname + '/public')); 
app.use(mainRoutes);
app.use(userRoutes);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs', ejs_mate);
app.set('view engine','ejs');





app.listen(3000, function (err) {

    if (err) throw err;

    console.log("Server is running")
})