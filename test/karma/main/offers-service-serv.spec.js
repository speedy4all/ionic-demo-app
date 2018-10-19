'use strict';

describe('module: main, service: OffersService', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var OffersService;
  beforeEach(inject(function (_OffersService_) {
    OffersService = _OffersService_;
  }));

  it('should do something', function () {
    expect(!!OffersService).toBe(true);
  });

});
