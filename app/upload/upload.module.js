'use strict';

// Define the `upload` module
angular.
  module('upload', [
    // ...which depends on the jQuery File Upload plugin
    'blueimp.fileupload'
  ]).
  config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads
      'self',
      // Allow loading videos from Wistia
      'https://fast.wistia.com/embed/medias/**'
    ])
  });
