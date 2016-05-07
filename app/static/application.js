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
	$scope.sayHi = function() {
		if (/^\s*$/.test($scope.name)) {
			$window.alert('Hello');
		} else {
			$window.alert('Hi, ' + $scope.name);
		}
	};
});
