var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./UserModel');

var TeamSchema = new Schema({
  name: String,
  users: [User]
});

module.exports = mongoose.model('Team', TeamSchema);
module.exports = TeamSchema;
