/**
* AppPrioritizer.graph Module
*
* Description
*/
angular.module('AppPrioritizer.graph', ['highcharts-ng'])
.controller('GraphController', function($scope, $rootScope, appLocalStorage) {
  var
    rtScope = $rootScope,
    activities = $rootScope.activities
    ;
  $scope.chartSeries = [];
  $scope.scatterConfig = {
    type: 'scatter',
    name: 'Activites',
    data: $scope.chartSeries,
    marker: {
      radius: 8,
      fillColor: '#ed1c24',
      symbol: 'triangle'
    },
    tooltip: {
            crosshairs: true,
            pointFormat: '<br /><b>Title :</b> {point.name}<br/><b>Importance :</b> {point.y}<br/><b>Urgency :</b> {point.x}'
        }
  };
  angular.forEach(activities, function  (val, key) {
    $scope.chartSeries.push({
      // [val.activityImportance, val.activityPriority]
      'y': val.activityImportance,
      'x': val.activityPriority,
      name: val.title

    });
  });

  console.log($scope.chartSeries);
  $rootScope.$watch('activities', function (newVal, oldVal) {
    if ( oldVal != newVal) {
      $scope.chartSeries = [];
      angular.forEach(activities, function  (val, key) {
        $scope.chartSeries.push({
          // [val.activityImportance, val.activityPriority]
          'y': val.activityImportance,
          'x': val.activityPriority,
          'name': val.title
        });
      });
      $scope.chartConfig.series[$scope.chartConfig.series.indexOf($scope.scatterConfig)].data = $scope.chartSeries;
    }
  }, true);

  $scope.chartConfig = {
    xAxis: {
      min: -0.5,
      max: 10,
      reversed: true,
      title: {
        text: 'Urgency'
      }
    },
    yAxis: {
      min: 0,
      max: 10,
      title: {
        text: 'Importance'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
      borderWidth: 1
    },
    title: {
      text: 'The Eisenhower Box'
    },
    series: [{
      type: 'line',
      name: 'Regression Line',
      data: [[0, 5], [10, 5]],
      marker: {
          enabled: false
      },
      showInLegend: false,
      states: {
          hover: {
              lineWidth: 0
          }
      },
      enableMouseTracking: false
    },{
      type: 'line',
      name: 'Regression Line',
      data: [[5, 0], [5, 10]],
        showInLegend: false,
      marker: {
          enabled: false
      },
      states: {
          hover: {
              lineWidth: 0
          }
      },
      enableMouseTracking: false
    },$scope.scatterConfig]
  };
});

/*{
      type: 'line',
      name: 'Regression Line',
      data: [[0, 5], [10, 5]],
      marker: {
          enabled: false
      },
      states: {
          hover: {
              lineWidth: 0
          }
      },
      enableMouseTracking: false
    },{
      type: 'line',
      name: 'Regression Line',
      data: [[5, 0], [5, 10]],
      marker: {
          enabled: false
      },
      states: {
          hover: {
              lineWidth: 0
          }
      },
      enableMouseTracking: false
    }, */