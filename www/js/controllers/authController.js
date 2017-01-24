/**
 * Created by SudeshNT on 1/23/2017.
 */
var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('loginController', function ($scope,$state,serviceLocator,httpService,$translate,$rootScope) {

  var t2bMobileApi = serviceLocator.serviceList.t2bMobileApi;

  $scope.forgotPassword = false;
  $scope.user = {};
  $scope.forgetPasswordRequest = {};

  $scope.doLogin = function (isValid) {
    if (isValid) {
      var extended_url = '/User/login';
      var reqObj = {
        "userName": $scope.user.userName,
        "password": $scope.user.password,
        "channel": "mobile"
      };
      httpService.postRequest(t2bMobileApi, extended_url, reqObj, {}).then(function (response) {
        if (response != null){
          if(response.loginStatus==1){
            localStorage.setItem('loginStatus',true);
            localStorage.setItem('authResponse',JSON.stringify(response.user));
            $state.go('home');
          }else{
            $scope.errorMessage = response.message;
          }
        }
      });
    }
  };

  $scope.requestForgotPassword = function (isValid) {
    if (isValid) {
      var extended_url = '/User/forgotPassword';
      var reqObj = {
        "userName": $scope.forgetPasswordRequest.userName
      };
      httpService.postRequest(t2bMobileApi, extended_url, reqObj, {}).then(function (response) {
        if (response != null){
          $state.go('confirmOTP');
        }
      });
    }
  };

  $scope.resentOTP = function () {

  };

  $scope.toggleForgotPassword = function () {
    $scope.forgotPassword = !$scope.forgotPassword;
  };

});

t2b_mobile.controller('registerController', function ($scope,serviceLocator,httpService,$state,$translate,$rootScope) {

  $scope.user = {};
  $scope.type = 'password';

  $scope.toggleShowHide = function () {
    $scope.type = $scope.type == 'text' ? 'password' : 'text';
  };

  $scope.createUser = function (isValid) {
    if(isValid){
      var t2bMobileApi = serviceLocator.serviceList.t2bMobileApi;
      var extended_url = '/User/new';
      var reqObj = {
        "mobile": $scope.user.phoneNumber,
        "firstName": $scope.user.phoneNumber,
        "password": $scope.user.password,
        "channel": "mobile"
      };
      httpService.postRequest(t2bMobileApi,extended_url,reqObj,{}).then(function(response){
        if(response!=null) {
          // if(response.statusCode==0){
          //   console.log(response);
          // }else{$scope.errorMessage = response.message;}
        }
      });
    }
  };

});

t2b_mobile.controller('confirmOTPController', function ($scope,$state,serviceLocator,httpService,$translate,$rootScope) {

});
