var app = angular.module('demoApp', []);

app.run(function($rootScope, $http) {
	$http.get('/whoami').then(function(response) {
		$rootScope.environment = response.data.message;
	}, function(response) {
		$rootScope.environment = 'unknown';
	});
})
app.controller('demoAppCtrl', function($scope, $http, $window) {
	$scope.name = '';
	$scope.getMessage = function() {
		return /^\s*$/.test($scope.name) ? 'Hello' : ('Hi, ' + $scope.name);
	}
	$scope.sayHi = function() {
		$window.alert($scope.getMessage());
	};
});
