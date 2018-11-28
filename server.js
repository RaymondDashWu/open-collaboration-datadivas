<<<<<<< HEAD
var express = require('express')
var app = express()
=======
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const projects = require('./controllers/projects.js')(app);
const db = require('./data/platform-db.js');
const Project = require('../models/project.js');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());



 
app.get('/', function (req, res) {
  res.send('Hello World')
})
>>>>>>> [FIX]Did initial commit on wrong branch

app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port 3000!')
  })