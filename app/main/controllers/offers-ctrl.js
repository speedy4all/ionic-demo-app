'use strict';
angular.module('main')
.controller('OffersCtrl', function ($log, $state, OffersService, Config) {

  $log.log('Hello from your Controller: OffersCtrl in module main:. This is your controller:', this);

  var vm = this;
  vm.offers = [];
  vm.onSelect = onSelectOffer;

  init();

  function onSelectOffer (offerId) {
    $state.go('menu.offerDetails', { id: offerId });
  }

  function init () {
    OffersService.getOffers()
      .then(function (resp) {
        var data = resp.data;
        data.map(function (item) {
          item.image_url = Config.ENV.SERVER_URL + item.image_url;
          item.date_start = new Date(item.date_start);
          item.date_expires = new Date(item.date_expires);
        });
        vm.offers = data;
      });
  }

});
