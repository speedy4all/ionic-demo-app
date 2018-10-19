'use strict';
angular.module('main')
.controller('LoginCtrl', function ($log, $state, $http, LoginService) {

  $log.log('Hello from your Controller: LoginCtrl in module main:. This is your controller:', this);

  var vm = this;
  vm.password = '';
  vm.email = '';
  vm.error = null;

  this.onLogin = function (viewModel) {
    $log.log('Login triggered');
    LoginService.onLogin(viewModel.email, viewModel.password)
      .then(function (resp) {
        if (resp.data && resp.data.error !== null) {
          $log.log(resp.data.error);
          vm.error = resp.data.error;
        } else {
          $http.defaults.headers.common = { 'AUTH-TOKEN': resp.auth_token };
          $log.log('Auth header: ' + $http.defaults.headers.common.Authorization);
          $state.go('menu.offers');
        }
      });
  };

});
