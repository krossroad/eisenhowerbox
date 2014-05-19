/**
* AppPrioritizer.activityEscapeDir Module
*
* Description
*/
angular.module('AppPrioritizer.activityEscapeDir', [])
  .directive('activityEscape', function () {
    'use strict';

    var ESCAPE_KEY = 27;

    return function (scope, elem, attrs) {
      elem
      .unbind('keydown')
      .bind('keydown', function (event) {
        if (event.keyCode === ESCAPE_KEY) {
          scope.$apply(attrs.activityEscape);
        }
      });
    };
  })
;