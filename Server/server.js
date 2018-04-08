var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./api/models/UserModel');
var Teams = require('./api/models/TeamsModel');
var port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Leaderboard').then(function () {
  console.log("Mongo Server started!!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/leaderboardRoutes');
routes(app);

app.listen(port);

console.log("Node Server started!! listening on port: " + port);
