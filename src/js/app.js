(function(window, angular, undefined) {
  'use strict';
  angular.module('infeed', [])
    .controller('MainController', ['$scope', function($scope) {
      $scope.articles = [
        {
          title: 'FOBO',
        }
      ];
    }]);

}(window, angular));
