'use strict';
angular.module('main')
.service('LoginService', function ($log, $http, Config) {

  $log.log('Hello from your Service: LoginService in module main');
  $http.defaults.headers.common = {
    Accept: 'application/json'
  };
  $http.defaults.headers.post = {
    'Content-Type': 'application/json'
  };
  $http.defaults.headers.put = {
    'Content-Type': 'application/json'
  };

  var user = {};

  this.onLogin = function (email, pass) {
    $log.log('Username: ' + email + ' pass: ' + pass);
    var payload = {
      username: email,
      password: pass
    };
    return init(payload)
      .then(function () {
        return user;
      }).catch(function (err) {
        return err;
      });
  };

  function init (payload) {
    return $http.post(Config.ENV.SERVER_URL + '/user/auth/', JSON.stringify(payload))
      .success(function (resp) {
        user = resp.data;
      }).error(function (err) {
        return err;
      });
  }
});
