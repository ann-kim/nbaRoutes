var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	addNewGame: function(gameObj){
		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}
		return $http ({
			method: 'POST',
			url: url,
			data: gameObj
		});
	},

	getTeamData: function(team){
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http ({
			method: 'GET',
			url: url
		}).then(function(data) {
			var result = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < result.length; i++) {
				if (gameObj.won === true) {
					wins += 1;
				} else {
					losses += 1;
				}
			}
			results.wins = wins;
			results.losses = losses;
		})
		return deferred.promise;
	}
});