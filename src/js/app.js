(function(window, angular, undefined) {
  'use strict';
  angular.module('infeed', [])
    .controller('MainController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
      $scope.feed = [];
      $scope.latestNewsFetched = false;
      $scope.adsFetched = false;

      $scope.init = function() {
        $http.get('assets/data/most-read.json')
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
        $scope.feed = $scope.feed.concat($scope.articles.slice(8));
      };

      $scope.getHTML = function(html) {
        return $sce.trustAsHtml(html);
      };

      $scope.init();

    }]);

}(window, angular));
