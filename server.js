// TOASK: OK to use var for these? Hoisted to top
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var projects = require('./controllers/projects.js')(app);
var db = require('./data/platform-db.js');
var Project = require('../models/project.js');
var jwt = require('jsonwebtoken');


// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());



app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port 3000!')
  })