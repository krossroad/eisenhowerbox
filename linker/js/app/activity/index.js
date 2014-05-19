/**
* AppPrioritizer.activity Module
*
* Description
*/
angular.module('AppPrioritizer.activity', [
    'AppPrioritizer.activityFocusDir',
    'AppPrioritizer.activityEscapeDir'
  ])
  .controller('ActivityController', function($scope, $rootScope, appLocalStorage){
    $scope.title = 'Activity';

    var
      rtScope = $rootScope,
      activities = $rootScope.activities
      ;

    var
      maxMetric = 10,
      minMetric = 0
      ;

    $scope.newActivity    = '';
    $scope.editedImpActivity = null;
    $scope.editedPrioActivity = null;
    $scope.originalActivity = null;

    $rootScope.$watch('activities', function (newVal, oldVal) {
      if (newVal !== oldVal) { // This prevents unneeded calls to the local storage
        appLocalStorage.put(activities);
      }
    }, true);

    $scope.addActivity = function () {
      var
        newActivity = $scope.newActivity.trim()
        ;

      activities.push({
        title: newActivity,
        activityImportance: 0,
        activityPriority: 0
      });
      $scope.newActivity = '';
    };

    $scope.removeActivity = function  (activity) {
      activities.splice(activities.indexOf(activity), 1);
    };

    $scope.editImportance = function (activity) {
      $scope.editedImpActivity = activity;

      $scope.originalActivity = angular.extend({}, activity);
    };

    $scope.editPriority = function (activity) {
      $scope.editedPrioActivity = activity;

      $scope.originalActivity = angular.extend({}, activity);
    };

    $scope.doneEditingImportance = function (activity) {
      $scope.editedImpActivity = null;

      activity.activityImportance = parseInt(activity.activityImportance);

      if (parseInt(activity.activityImportance) > maxMetric ) {
        activity.activityImportance = maxMetric;
      }

      if ( parseInt(activity.activityImportance) < minMetric ) {
        activity.activityImportance = minMetric;
      }

    };

    $scope.doneEditingPriority = function (activity) {
      $scope.editedPrioActivity = null;

      activity.activityPriority = parseInt(activity.activityPriority);

      if (parseInt(activity.activityPriority) > maxMetric ) {
        activity.activityPriority = maxMetric;
      }

      if ( parseInt(activity.activityPriority) < minMetric ) {
        activity.activityPriority = minMetric;
      }
    };

    $scope.revertActivity = function ( activity ) {

      activities[activities.indexOf(activity)] = $scope.originalActivity;


      // $scope.doneEditingPriority($scope.originalActivity);
      // $scope.doneEditingImportance($scope.originalActivity);
    };
  })
;