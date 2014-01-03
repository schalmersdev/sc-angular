'use strict';

angular.module('myNewProjectApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/index', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/latest', {
        templateUrl: 'views/latest.html',
        controller: 'LatestCtrl'
      })
      .when('/skillset', {
        templateUrl: 'views/skillset.html',
        controller: 'SkillsetCtrl'
      })
      .otherwise({
        redirectTo: '/index'
      });
  });

