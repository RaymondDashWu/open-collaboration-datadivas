
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const exphbs = require('express-handlebars');
const db = require('./data/platform-db.js');
const Project = require('./models/project');
const jwt = require('jsonwebtoken');
const path = require('path');

// Database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/data-divas', {useNewUrlParser: true});

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// For static files
app.use(express.static('public'))

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

const projects = require('./controllers/projects.js')(app);

// app.get('/',function(req,res){
//   // res.sendFile(path.join(__dirname+'/main.hbs'));
//   res.render('index')
//   //__dirname : It will resolve to your project folder.
// });

app.listen(process.env.PORT || 5000, () => {
    console.log('App listening on port 5000!')
  })