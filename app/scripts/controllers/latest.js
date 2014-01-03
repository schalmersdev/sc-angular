'use strict';

angular.module('myNewProjectApp')
.controller('LatestCtrl', function ($scope, $http) {
	$http.get('/json/projects.json')
	.then(function(res){
		$scope.projects = res.data.projects;                   
	});
});
