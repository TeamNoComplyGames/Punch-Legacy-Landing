'use strict';

/**
 * @ngdoc function
 * @name punchLegacyLandingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the punchLegacyLandingApp
 */
angular.module('punchLegacyLandingApp')
  .controller('MainCtrl', function ($scope) {
      //Code goes here

      $scope.myInterval = 3500;
      $scope.slides = [];

      $scope.slides.push({text: 'cats!', image: '../images/alpha5.gif'});
      $scope.slides.push({text: 'cats!', image: '../images/alpha5screen1.png'});
      $scope.slides.push({text: 'cats!', image: '../images/alpha5screen2.png'});
      $scope.slides.push({text: 'cats!', image: '../images/alpha5screen3.png'});
  });
