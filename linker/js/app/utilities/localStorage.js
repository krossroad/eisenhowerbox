/**
* AppPro Module
*
* Description
*/
angular.module('AppPrioritizer.appLocalStorage', [])
  .factory('appLocalStorage', function(){
    'use strict';

    var STORAGE_ID = 'prtzr-app-angularjs';

    return {
      get: function () {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      put: function (activity) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(activity));
      }
    };
  });