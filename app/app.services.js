'use strict';

angular.module('myApp.services', [])
.factory('mySrvice', ['$http', '$q', function ($http, $q) {
    var svc = this;
    svc.data = undefined;

    svc.globalGet = function () {
    	var getUrl = 'http://yourapi.com';
    	var deferred = $q.defer();

        if (typeof svc.data === 'undefined' || svc.data === null) {
	        $http.get(getUrl).success(function (data, status, headers, config) {
	        	svc.data = data;
	            deferred.resolve(svc.data);
	        }).error(function (data, status, headers, config) {
	            deferred.reject(status);
	        });
	    } else {
	    	deferred.resolve(svc.data);
	    }

        return deferred.promise;
    };

    return svc;
}]);