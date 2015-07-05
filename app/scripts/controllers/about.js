'use strict';

/**
 * @ngdoc function
 * @name punchLegacyLandingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the punchLegacyLandingApp
 */
angular.module('punchLegacyLandingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
