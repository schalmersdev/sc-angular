'use strict';

angular.module('myNewProjectApp')
.controller('SkillsetCtrl', function ($scope, $http) {
	$http.get('/json/skills.json')
	.then(function(res){
		$scope.skills = res.data.skills;                  
	});

	$scope.skillList= (function(){
		setInterval(function(){$('.skill-set').addClass("active")},800);
	})();
});
