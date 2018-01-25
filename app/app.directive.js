'use strict';

angular.module('myApp.directives', [])

.directive('myDirective', [function () {

    var selectCTRL = function (timeSvc) {
        var dm = this;
    };

    return {
        restrict: 'E',
        scope: {},
        controller: selectCTRL,
        controllerAs: 'dm',
        bindToController: true,
        replace: true,
        templateUrl: 'myDirective.html'
    };    
}]);