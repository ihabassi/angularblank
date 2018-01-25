'use strict';

angular.module('myApp.routeTwo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/routeTwo', {
    templateUrl: 'routeTwo/routeTwo.html',
    controller: 'routeTwoCtrl'
  });
}])

.controller('routeTwoCtrl', [function() {
}]);