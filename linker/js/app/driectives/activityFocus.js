/**
* AppPrioritizer.activityFocusDir Module
*
* Description
*/
angular.module('AppPrioritizer.activityFocusDir', [])
  .directive('activityFocus', function activityFocus($timeout) {
    'use strict';

    return function (scope, elem, attrs) {
      scope.$watch(attrs.activityFocus, function (newVal) {
        if (newVal) {
          $timeout(function () {
            elem[0].focus();
          }, 0, false);
        }
      });
    };
  })

;