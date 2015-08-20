(function(window, angular, undefined) {
  'use strict';
  angular.module('infeed', [])
    .controller('MainController', ['$scope', '$http', function($scope, $http) {

      $scope.feed = [];
      $scope.latestNewsFetched = false;
      $scope.adsFetched = false;

      $scope.init = function() {
        $http.get('assets/data/latest-news.json')
          .success(function(data) {
            $scope.articles = data;
            $scope.latestNewsFetched = true;
            $scope.fetchCompleted();
          });

        $http.get('assets/data/ads.json')
          .success(function(data) {
            $scope.ads = data;
            $scope.adsFetched = true;
            $scope.fetchCompleted();
          });
      };


      $scope.fetchCompleted = function() {
        if($scope.latestNewsFetched && $scope.adsFetched) {
          $scope.createFeed();
        }
      };

      $scope.createFeed = function() {
        $scope.ads.forEach(function(ad) {
          ad.ad = true;
        });

        $scope.feed = $scope.articles.slice(0, 4);
        $scope.feed.push($scope.ads[0]);
        $scope.feed = $scope.feed.concat($scope.articles.slice(5, 8));
        $scope.feed.push($scope.ads[1]);
        $scope.feed = $scope.feed.concat($scope.articles.slice(9, 13));
      };

      $scope.init();

    }]);

}(window, angular));
