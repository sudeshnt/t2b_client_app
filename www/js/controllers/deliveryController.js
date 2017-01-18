var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('deliveryGuestController', function ($scope,$state,$translate,$rootScope) {

});

t2b_mobile.controller('deliveryMemberController', function ($scope,$state,$translate,$rootScope) {
    $scope.editEnabled = false;
    $scope.addNewEnabled = false;

    initAddress();

    function initAddress() {
       $scope.addresses = [
         {
            id : 1,
            name : 'Sudesh Nimesha',
            address : {
              lineOne : 'No 41',
              lineTwo : 'Elliot Road',
              lineThree : 'Galle'
            },
            mobile : '0771232131',
            editEnabled: false
         },
         {
           id : 2,
           name : 'Sudesh Nimesha',
           address : {
             lineOne : 'No 123',
             lineTwo : 'Pagoda Road',
             lineThree : 'Nugegoda'
           },
           mobile : '0771232131',
           editEnabled: false
         }
       ]
    }

    $scope.addNew = function () {
      $scope.addNewEnabled = $scope.addNewEnabled ? false : true;
    };
    $scope.closeAddNew = function (){
      $scope.addNewEnabled = false;
    };
    $scope.submitNewAddress = function () {
      $scope.addNewEnabled = false;
    };
    $scope.edit = function (address) {
      $scope.addNewEnabled = false;
      $scope.selectedAddress = address;
      $scope.selectedAddress.address = address.address.lineOne+','+address.address.lineTwo+','+address.address.lineThree;
      $scope.selectedAddress.editEnabled = true;
      // $scope.editEnabled = true;
    };
    $scope.submitAddress = function (address) {
      console.log(address);
      address.address = {
        lineOne:address.address.split(",")[0],
        lineTwo:address.address.split(",")[1],
        lineThree:address.address.split(",")[2]
      };
      address.editEnabled = false;
    };
    $scope.confirmOrder = function () {
      $state.go('confirm_order');
    }
});
