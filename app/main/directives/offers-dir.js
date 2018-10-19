'use strict';
angular.module('main')
.directive('offers', function () {
  return {
    templateUrl: 'main/templates/offers-dir.html',
    restrict: 'E',
    scope: {
      items: '=',
      selected: '=onSelected'
    }
  };
});
