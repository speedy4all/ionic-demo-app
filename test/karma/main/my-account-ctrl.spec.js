'use strict';

describe('module: main, controller: MyAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MyAccountCtrl;
  beforeEach(inject(function ($controller) {
    MyAccountCtrl = $controller('MyAccountCtrl');
  }));

  it('should do something', function () {
    expect(!!MyAccountCtrl).toBe(true);
  });

});
