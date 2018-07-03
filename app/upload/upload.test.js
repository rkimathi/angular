'use strict';

// Unit test for the `upload` component
describe('upload', function() {
  
  // Load the module that contains the `upload` component before each test
  beforeEach(module('upload'));
  
  // Test the controller
  it('should initialize jQuery File Upload plugin', inject(function($componentController) {
    var ctrl = $componentController('upload');
    var fu = $('#fileupload').fileupload();
  
    expect(fu).toBeDefined();
  }));
  
});