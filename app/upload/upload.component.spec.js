'use strict';

// Unit test for the `upload` component
describe('Upload component', function() {
  
  // Load the module that contains the `upload` component before each test
  beforeEach(module('blueimp.fileupload'));
  beforeEach(module('upload'));

  // Test the controller
  describe('Upload controller', function() {
    
    var ctrl;

    // Use $componentController to instantiate the controller
    beforeEach(inject(function($componentController) {
      ctrl = $componentController('upload');
    }));

    it('should initialize jQuery File Upload plugin', function() {
      var fu = $('#fileupload').fileupload();
    
      expect(fu).toBeDefined();
    });

  });
  
});