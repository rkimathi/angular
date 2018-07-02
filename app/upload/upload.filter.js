'use strict';

// Define the `trusted` filter
angular.
  module('upload').
  filter('trusted', ['$sce', function($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);
