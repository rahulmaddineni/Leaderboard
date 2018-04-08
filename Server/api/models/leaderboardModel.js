var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  user_name: String,
  wins: Number,
  losses: Number,
  elo: Number,
  elo_history: [Number],
  rank: Number,
  winning_streak: Number,
  losing_streak: Number,
  current_streak: Number,
  last_match_won: Boolean,
  registered: Boolean,
  registered_at: Date,
  captain: {type: Boolean, default: false}
  unranked: Boolean,
  retired: Boolean
});
var User = mongoose.model('User', UserSchema);

var TeamSchema = new Schema({
  name: String,
  users: [User]
});

module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Team', TeamSchema);
