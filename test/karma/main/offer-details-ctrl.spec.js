'use strict';

describe('module: main, controller: OfferDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var OfferDetailsCtrl;
  beforeEach(inject(function ($controller) {
    OfferDetailsCtrl = $controller('OfferDetailsCtrl');
  }));

  it('should do something', function () {
    expect(!!OfferDetailsCtrl).toBe(true);
  });

});
