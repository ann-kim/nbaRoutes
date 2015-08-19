var app = angular.module('nbaRoutes');

//Parameters Explained:
	// $scope
	// $routeParams - give us access to :team in the url
	// teamService - give us access to getting the teams data and adding new games
	// teamData - gives us the data that is being returned from teamService.getData in our resolve block in app.js
app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	teamData = $scope.teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function() {
		$scope.showNewGameForm = true;
	}

	if ($routeParams.team === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = 'images/jazz-logo.png'; 
	} else if ($routeParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logoPath = 'images/lakers-logo.png';
	} else if ($routeParams.team === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = 'images/heat-logo.png';
	}

	$scope.submitGame = function() {
		$scope.newGame.homeTeam = addNewGame.homeTeam.split(' ').join('').toLowerCase();
		teamService.addNewGame($scope.newGame).then(teamService.getTeamData($scope.newGame.homeTeam)).then(teamService.getTeamData());
		$scope.teamData = teamService.getTeamData;
		$scope.newGame = {};
		$scope.showNewGameForm = false;
	}
});


