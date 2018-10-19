'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $stateProvider
    .state('menu.myAccount', {
      url: '/my-account',
      views: {
        'side-menu21': {
          templateUrl: 'main/templates/myAccount.html',
          controller: 'MyAccountCtrl',
          controllerAs: 'vm'
        }
      }
    })

    .state('menu.offers', {
      url: '/offers',
      views: {
        'side-menu21': {
          templateUrl: 'main/templates/offers.html',
          controller: 'OffersCtrl',
          controllerAs: 'vm'
        }
      }
    })

    .state('menu.myOrders', {
      url: '/my-orders',
      views: {
        'side-menu21': {
          templateUrl: 'main/templates/myOrders.html',
          controller: 'MyOrdersCtrl',
          controllerAs: 'vm'
        }
      }
    })

    .state('menu', {
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl',
      abstract: true
    })

    .state('menu.offerDetails', {
      url: '/offer-details/:id',
      views: {
        'side-menu21': {
          templateUrl: 'main/templates/offerDetails.html',
          controller: 'OfferDetailsCtrl',
          controllerAs: 'vm'
        }
      }
    })

    .state('menu.products', {
      url: '/products',
      views: {
        'side-menu21': {
          templateUrl: 'main/templates/products.html',
          controller: 'ProductsCtrl',
          controllerAs: 'vm'
        }
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'main/templates/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    })

    .state('signup', {
      url: '/register',
      templateUrl: 'main/templates/signup.html',
      controller: 'SignupCtrl',
      controllerAs: 'vm'
    });
  $urlRouterProvider.otherwise('/login');
});
