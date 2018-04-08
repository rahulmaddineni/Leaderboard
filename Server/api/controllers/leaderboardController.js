var mongoose = require('mongoose');
var User = mongoose.model('User');
var Team = mongoose.model('Team');
var Teams = mongoose.model('Teams');
var teams_instance = new Teams();

exports.createUser = function (req, res) {
  var newuser = new User(req.body);
  newuser.save(function (err, response) {
    if(err){
      res.send(err);
    }
    Team.update({_id: req.body["teamId"]}, { $push: { users: newuser} }, function (teamerr, teamresponse) {
      if(teamerr){
        res.send(teamerr);
      }
    });
    res.json(newuser);
  });
};

exports.getAllUsers = function (req, res) {
  User.find({}, function (err, response) {
    if(err){
      res.send(err);
    }
    res.json(response);
  });
};

exports.getUserInfo = function (req,res) {
  User.find({_id: req.params.userId}, function (err, response) {
    if(err){
      res.send(err);
    }
    res.json(response);
  });
};

exports.updateUser = function (req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function (err, response) {
    if(err){
      res.send(err);
    }
    res.json(response);
  });
};

exports.createTeam = function (req, res) {
  var newteam = new Team(req.body);
  teams_instance.teams.push(newteam);
  teams_instance.save(function (err, response) {
    if(err){
      res.send(err);
    }
    res.json(response);
  });
};

exports.getTeams = function (req, res) {
  Teams.find({}, function (err, response) {
    if(err){
      res.send(err);
    }
    res.json(response);
  });
};

exports.getTeamInfo = function (req, res) {
  Teams.findOne({},{teams: {$elemMatch: {_id: req.params.teamId}}}, function (err, response) {
    if(err){
      res.send(err);
    }
    res.json(response);
  });
};
