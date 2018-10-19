'use strict';

describe('module: main, controller: OffersCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var OffersCtrl;
  beforeEach(inject(function ($controller) {
    OffersCtrl = $controller('OffersCtrl');
  }));

  it('should do something', function () {
    expect(!!OffersCtrl).toBe(true);
  });

});
