var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('deliveryGuestController', function ($scope,$state,$translate,$rootScope) {

});

t2b_mobile.controller('deliveryMemberController', function ($scope,$state,serviceLocator,httpService,$translate,$rootScope) {
    $scope.editEnabled = false;
    $scope.addNewEnabled = false;
    $scope.newAddress = {};

    var t2bMobileApi = serviceLocator.serviceList.t2bMobileApi;

    initLoginStatus();

    function initLoginStatus(){
      if(localStorage.getItem('loginStatus')!=null){
        if(localStorage.getItem('loginStatus') && localStorage.getItem('loginStatus')){
          $scope.loginStatus = true;
          $scope.authResponse = JSON.parse(localStorage.getItem('authResponse'));
          initAddress();
        }else{
          $scope.loginStatus = false;
        }
      }else{
        $scope.loginStatus = false;
      }
    }

    function initAddress() {
       // $scope.addresses = [
       //   {
       //      id : 1,
       //      name : 'Sudesh Nimesha',
       //      address : {
       //        lineOne : 'No 41',
       //        lineTwo : 'Elliot Road',
       //        lineThree : 'Galle'
       //      },
       //      mobile : '0771232131',
       //      editEnabled: false
       //   },
       //   {
       //     id : 2,
       //     name : 'Sudesh Nimesha',
       //     address : {
       //       lineOne : 'No 123',
       //       lineTwo : 'Pagoda Road',
       //       lineThree : 'Nugegoda'
       //     },
       //     mobile : '0771232131',
       //     editEnabled: false
       //   }
       // ]
        var extended_url = '/User/get';
        var reqObj = {
          "userName": $scope.authResponse.mobile
        };
        httpService.postRequest(t2bMobileApi,extended_url,reqObj,{}).then(function(response){
          if(response!=null) {
            $scope.addresses = response.addresses;
            if($scope.addresses.length==0){
              $scope.addNewEnabled = true;
            }
            console.log($scope.addresses);
          }
        });

    }

    $scope.addNew = function () {
      $scope.addNewEnabled = $scope.addNewEnabled ? false : true;
    };
    $scope.closeAddNew = function (){
      $scope.addNewEnabled = false;
    };
    $scope.submitNewAddress = function () {
      $scope.addNewEnabled = false;
      console.log($scope.newAddress);
      var extended_url = '/User/address/new';
      var reqObj = {
        "addressId": 0,
        "userId": $scope.authResponse.userId,
        "contactName": $scope.newAddress.name,
        "addressLine1": $scope.newAddress.address.lineOne,
        "addressLine2": $scope.newAddress.address.lineTwo,
        "city": $scope.newAddress.address.city,
        "cityId": 11,
        "areaId": 0,
        "areaName": "",
        "state": "",
        "zipCode": "",
        "telephone": $scope.newAddress.mobile,
        "country": "",
        "longitude": 0,
        "latitude": 0
      };
      httpService.postRequest(t2bMobileApi,extended_url,reqObj,{}).then(function(response){
        if(response!=null) {
          console.log(response);
        }
      });
    };
    $scope.edit = function (address) {
      $scope.addNewEnabled = false;
      $scope.selectedAddress = address;
      angular.forEach($scope.addresses,function(obj){
          obj.editEnabled = false;
      });
      $scope.selectedAddress.editEnabled = true;
    };
    $scope.editAddress = function (address) {
      delete address.editEnabled;
      var extended_url = '/User/address/update';
      httpService.postRequest(t2bMobileApi,extended_url,address,{}).then(function(response){
        if(response!=null) {
          address.editEnabled = false;
        }
      });
    };
    $scope.confirmOrder = function () {
      $state.go('confirm_order');
    }
});
