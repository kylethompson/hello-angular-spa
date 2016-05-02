'use strict';

/**
 * @ngdoc function
 * @name helloAngularSpaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloAngularSpaApp
 */
angular.module('helloAngularSpaApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  	$http.get('http://localhost:9420/hello').then(function(value) {
	    $scope.greeting = value.data;
    }, function(value) {
        console.log('error lol - ' + value);
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);