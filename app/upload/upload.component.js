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
      .on('fileuploadprogress', function(e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);

        $('.progress .progress-bar').css(
          'width', progress + '%'
        );
      })
      .on('fileuploaddone', function(e, data) {
        if (data.textStatus === 'success') {
          self.fileId = data.result.hashed_id;
          $scope.$apply();
          console.log(data.result.hashed_id);
        }
        else {
          self.status = data.textStatus;
          $scope.$apply();
          console.log(data.jqXHR.responseJSON.error);
        }
      })
      .on('fileuploadfail', function(e, data) {
        var file = data.files[data.index];
        console.log(data);
      });
    }]
  });
