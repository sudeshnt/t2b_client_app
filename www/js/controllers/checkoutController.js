var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('checkoutController', function ($scope,$state,$translate,$rootScope) {

  $scope.sizes = ['small','medium','large'];

  $scope.items = ['asda','asdas'];
  $scope.isMemberLogin = false;
  $scope.isEditSeen = false;

  $scope.cart = [
    $rootScope.cart
  ];
  console.log($scope.cart);

  if($rootScope.cart==undefined){
    $state.go('restaurant');
  }

  calculateCartFullAmount();

  $scope.toggleMemberLoginForm = function() {
    if($scope.isMemberLogin) {
      $scope.isMemberLogin = false;
    }else {
      $scope.isMemberLogin = true;
    }
  };

  $scope.toggleEdit = function (item) {
    item.editEnabled = true;
  };

  $scope.add = function (item) {
      item.selectedSize.qty++;
      calculateCartFullAmount();
  };

  $scope.sub = function (item) {
      item.selectedSize.qty>0 ? item.selectedSize.qty-- : '';
      calculateCartFullAmount();
  };

  $scope.getItemTotal = function (item) {
    console.log(item);
    // return item.selectedSize.unitPrice*item.selectedSize.qty;
  };

  function calculateCartFullAmount(){
    // if($scope.cart.length>0){
      angular.forEach($scope.cart, function(obj) {
        // if(obj!=undefined){
          obj.totalAmount = 0;
          for(var i=0;i< obj.items.length;i++){
            console.log(obj.items[i]);
            obj.totalAmount += obj.items[i].selectedSize.unitPrice * obj.items[i].selectedSize.qty;
          }
        // }
      });
    // }
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

