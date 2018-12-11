const mongoose = require('mongoose');
assert = require('assert');

// const url = "mongodb://localhost/reddit-db";    // UNUSED URL ENDPOINT
mongoose.Promise = global.Promise;
mongoose.connect(
  // "mongodb://localhost/reddit-db",          // Change this to the name of the actual
  'mongodb://localhost/data-divas',

  { useMongoClient: true }
);
// mongoose.Promise = global.Promise;
// mongoose.connect(
//   url,
//   { useNewUrlParser: true },
//   function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected successfully to database");

//     // db.close(); turn on for testing
//   }
// );
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true);

module.exports = mongoose.connection;
