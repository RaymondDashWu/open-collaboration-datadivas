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

// app.engine('handlebars', exphbs({defaultLayout: 'index'}));
// app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'style.css'));

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

const projects = require('./controllers/projects.js')(app);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(process.env.PORT || 5000, () => {
    console.log('App listening on port 5000!')
  })