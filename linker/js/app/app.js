/**
* AppPrioritizer Module
*
* Description
*/
var
  app = angular.module('AppPrioritizer', [
    'AppPrioritizer.graph',
    'AppPrioritizer.activity',
    'AppPrioritizer.appLocalStorage'
  ])
  .controller('AppController', function($rootScope, appLocalStorage){
    $rootScope.activities = appLocalStorage.get();
  })
  ;
