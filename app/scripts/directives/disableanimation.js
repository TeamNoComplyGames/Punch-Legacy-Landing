'use strict';

/**
 * @ngdoc directive
 * @name punchLegacyLandingApp.directive:disableAnimation
 * @description
 * # disableAnimation
 */
angular.module('punchLegacyLandingApp')
  .directive('disableAnimation', function($animate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    }
});
