var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  router
  	.when ('/', {
  		templateUrl: 'js/home/homeTmpl.html',
  		controller: 'homeCtrl'
  	})
  	.when ('/teams/:team') ({
  		templateUrl: 'js/teams/teamTmpl.html',
  		controller: 'teamCtrl',
  		resolve: {
  			teamData: function(teamService) {
  				return teamService.getTeamData($router.current.params.team);
  			}
  		}
  	})
  	.otherwise ('/', {
  		templateUrl: 'js/home/homeTmpl.html',
  		controller: 'homeCtrl'
  	})
  }
});