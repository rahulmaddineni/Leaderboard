'use strict';

module.exports = function(app) {
  var leaderboardController = require('../controllers/leaderboardController');

  // User Routes
  app.route('/user')
    .post(leaderboardController.createUser);

  app.route('/users')
    .get(leaderboardController.getAllUsers);

  app.route('/users/:userId')
    .get(leaderboardController.getUserInfo)
    .put(leaderboardController.updateUser);

  app.route('/team')
    .post(leaderboardController.createTeam);

  app.route('/teams')
    .get(leaderboardController.getTeams);

  app.route('/teams/:teamId')
    .get(leaderboardController.getTeamInfo)
};
