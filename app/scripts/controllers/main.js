'use strict';

angular.module('myNewProjectApp')
.controller('MainCtrl', function ($scope) {
  var logoGrid=function(){
    var list = $(".logo-grid li").toArray();
    var elemlength = list.length;
    setInterval(function(){
      $(".logo-grid li").removeClass("flip");
      var randomnum = Math.floor(Math.random()*elemlength);
      var randomitem = list[randomnum];
      $(randomitem).addClass("flip")
    },3000);
  };
  logoGrid();
});


