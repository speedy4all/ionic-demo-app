'use strict';
angular.module('main')
.controller('OfferDetailsCtrl', function ($log, $stateParams, OffersService) {

  $log.log('Hello from your Controller: OfferDetailsCtrl in module main:. This is your controller:', this);

  var vm = this;
  vm.products = [];

  init();

  function init () {
    OffersService.getOfferProducts($stateParams.id)
      .then(function (res) {
        $log.log(res);
        vm.products = res.data.results;
      });
  }
});
