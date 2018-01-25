'use strict';

angular.module('myApp.routeOne', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/routeOne', {
    templateUrl: 'routeOne/routeOne.html',
    controller: 'routeOneCtrl'
  });
}])

.controller('routeOneCtrl', [function() {
}]);