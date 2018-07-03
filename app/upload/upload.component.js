'use strict';

// Register `upload` component, along with its associated template and controller
angular.
  module('upload').
  component('upload', {
    templateUrl: 'upload/upload.template.html',
    controller: ['$scope', function UploadController($scope) {
      var url = 'https://upload.wistia.com';
      var api_password = 'd63337593d72edb51c80aa4e8c7a6b7d2bcf8a694546d9ce24004c29c65ff3a8';
      var self = this;
      self.fileId = null;

      // Initialize the jQuery File Upload widget:
      $('#fileupload').fileupload({
        url: url,
        formData: {api_password: api_password},
        dataType: 'json',
        acceptFileTypes: /^video\/.*$/,
        maxFileSize: 25000000,
        minFileSize: 5000000
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
      })
      // Catch validation errors
      .on('fileuploadprocessfail', function(e, data) {
        self.status = 'error';
        self.message = data.files[data.index].error;
        $scope.$apply();
      });
    }]
  });
