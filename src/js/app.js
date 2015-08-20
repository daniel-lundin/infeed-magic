(function(window, angular, undefined) {
  'use strict';
  angular.module('infeed', [])
    .controller('MainController', ['$scope', '$http', '$sce', '$q', function($scope, $http, $sce, $q) {
      $scope.feed = [];
      $scope.latestNewsFetched = false;
      $scope.adsFetched = false;

      $scope.init = function() {
        $http.get('assets/data/allt-om-resor.json')
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
        var cleanHTML = html ? html.replace(/<p>\u00a0<\/p>/g, "") : "";
        return $sce.trustAsHtml(cleanHTML);
      };

      $scope.getListingImage = function(article, aspectRatio) {
        aspectRatio = aspectRatio || "16x9";
        var versions = article.listingImage.versions;
        var listingImage = versions[0];
        for (var i = 0; i < versions.length; ++i) {
          if (versions[i].aspectRatio === aspectRatio) {
            listingImage = versions[i];
            break;
          }
        }
        return listingImage.url;
      };

      $scope.init();

    }])
    .directive('stopAnchorTagClickBubble', function() {
      return {
        restrict: 'A',
        link: function (scope, elem) {
          setTimeout(function () {
            elem.find("a").on('click', function(e) {
              e.stopPropagation();

              return false;
            });
          }, 0);
        }
      };
    })
    .directive('onCloseScrollTo',['$animate', function($animate) {
      return {
        restrict: 'A',
        link: function (scope, elem) {
          elem.on('click', function () {
            if(scope.article.expanded) {
              var top = $(elem).closest(".article").offset().top;

              $("html, body").animate({
                scrollTop: top
              });
            }
          });
        }
      };
    }]);

}(window, angular));
