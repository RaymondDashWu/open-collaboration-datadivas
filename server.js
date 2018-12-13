require('dotenv').config();

const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const exphbs = require('express-handlebars');
// db = require('./data/platform-db.js');
// const Project = require('./models/project');
const jwt = require('jsonwebtoken');
// const path = require('path');
// const { verifyAuthentication } = require('./utils/middleware');

// Database
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/data-divas', { useNewUrlParser: true });

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// For static files
app.use(express.static('public'));

app.use(cookieParser()); // Add this after you initialize express.

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var checkAuth = (req, res, next) => {
  console.log('Checking authentication');
  if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
    req.user = null;
  } else {
    const token = req.cookies.nToken;
    const decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }
  console.log("req.user:",req.user)
  // res.locals.user = req.user.data;
  next();
};
// Add after body parser initialization!
app.use(expressValidator());
app.use(checkAuth)



require('./controllers/auth.js')(app);
/** Protected routes */
// app.use(verifyAuthentication);
require('./controllers/projects.js')(app);



// app.get('/',function(req,res){
//   // res.sendFile(path.join(__dirname+'/main.hbs'));
//   res.render('index')
//   //__dirname : It will resolve to your project folder.
// });

app.listen(process.env.PORT || 5000, () => {
  // app.listen(port);
  console.log('App listening on port 5000!');
});
