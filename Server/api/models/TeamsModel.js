var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Team = require('./TeamModel');

var TeamsSchema = new Schema({
  teams: [Team]
});

module.exports = mongoose.model('Teams', TeamsSchema);
