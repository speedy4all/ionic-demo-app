'use strict';

describe('module: main, controller: MyOrdersCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MyOrdersCtrl;
  beforeEach(inject(function ($controller) {
    MyOrdersCtrl = $controller('MyOrdersCtrl');
  }));

  it('should do something', function () {
    expect(!!MyOrdersCtrl).toBe(true);
  });

});
