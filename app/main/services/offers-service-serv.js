'use strict';
angular.module('main')
.service('OffersService', function ($http, $log, Config) {

  $log.log('Hello from your Service: OffersService in module main');

  var offers = [];
  var products = [];

  this.getOffers = function () {
    $log.log('Getting offers');
    return init().then(function () {
      return offers;
    });
  };

  this.getOfferProducts = function (offerId) {
    $log.log('Getting products for offer: ' + offerId);
    return $http.get(Config.ENV.SERVER_URL + '/offer/' + offerId + '/products/')
      .then(function (response) {
        products = response.data;
        return products;
      });
  };

  function init () {
    return $http.get(Config.ENV.SERVER_URL + '/offers/')
      .then(function (response) {
        offers = response.data;
      });
  }

});
