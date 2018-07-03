//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-process.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-validate.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-angular.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
