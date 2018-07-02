'use strict';

// Register `upload` component, along with its associated template and controller
angular.
  module('upload').
  component('upload', {
    templateUrl: 'upload/upload.template.html',
    controller: ['$scope', function UploadController($scope) {
      var url = 'https://upload.wistia.com';
      var api_password = '74e299619401096cf1850df06714b006a00026d60c99aa900abd3e16359eecf1';
      var self = this;

      // Initialize the jQuery File Upload widget:
      $('#fileupload').fileupload({
        url: url,
        formData: {api_password: api_password},
        dataType: 'json',
        acceptFileTypes: /^video\/.*$/,
        maxFileSize: 10000000,
        minFileSize: 1000000
      })
      // Progress bar
      .on('fileuploadprogress', function(e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);

        $('.progress .progress-bar').css(
          'width', progress + '%'
        );
      })
      // Success handler
      .on('fileuploaddone', function(e, data) {
        self.status = data.textStatus;
        self.fileId = data.result.hashed_id;
        var baseUrl = 'https://fast.wistia.com/embed/medias/';
        self.scriptSrc = baseUrl + self.fileId + '.jsonp';
        self.imgSrc = baseUrl + self.fileId + '/swatch';
        self.message = data.result.name + ' uploaded successfully';
        $scope.$apply();
      })
      // Error handler
      .on('fileuploadfail', function(e, data) {
        self.status = data.textStatus;
        self.message = data.jqXHR.responseJSON.error;
        $scope.$apply();
      });
    }]
  });
