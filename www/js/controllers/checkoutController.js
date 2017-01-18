var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('checkoutController', function ($scope,$state,$translate,$rootScope) {

  $scope.sizes = ['small','medium','large'];

  $scope.items = ['asda','asdas'];
  $scope.isMemberLogin = false;
  $scope.isEditSeen = false;
  $scope.toggleMemberLoginForm = function() {
    if($scope.isMemberLogin) {
      $scope.isMemberLogin = false;
    }else {
      $scope.isMemberLogin = true;
    }
  };
  $scope.toggleEdit = function () {
    if($scope.isEditSeen) {
      $scope.isEditSeen = false;
    }else {
      $scope.isEditSeen = true;
    }
  };

  $scope.logIn = function () {
    $state.go('delivery_member');
  };

  $scope.guestDelivery = function () {
    $state.go('delivery_guest');
  };

});

t2b_mobile.controller('confirmOrderController', function ($scope,$state,$translate,$rootScope) {

});

