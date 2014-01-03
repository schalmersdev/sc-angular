'use strict';

angular.module('myNewProjectApp')
.controller('SocialCtrl', function ($scope, $http) {
	$http.get('/json/social.json')
	.then(function(res){
		$scope.socials = res.data.result;                
	});
});
