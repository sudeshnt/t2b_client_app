var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('checkoutController', function ($scope,$state,$translate,$rootScope,cartService) {

  $scope.isMemberLogin = false;
  $scope.isEditSeen = false;

  $scope.cart = cartService;

  initCart();

  function initCart() {
    if($scope.cart.CART.cartObject!=null && $scope.cart.CART.cartObject.orders.length>0){
      $rootScope.cart = $scope.cart.CART.cartObject;
      $scope.currentCart = angular.copy($scope.cart.CART.cartObject);
      initLoginStatus();
      calculateCartFullAmount();
    }else{
      $state.go('restaurant');
    }
  }

  function initLoginStatus(){
    if(localStorage.getItem('loginStatus')!=null){
      $scope.loginStatus = localStorage.getItem('loginStatus')=='true' && localStorage.getItem('loginStatus') != 'undefined' ? true : false;
    }else{
      $scope.loginStatus = false;
    }
  }

  $scope.toggleMemberLoginForm = function() {
    $scope.isMemberLogin = $scope.isMemberLogin ? false : true;
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
    // console.log(item);
    // return item.selectedSize.unitPrice*item.selectedSize.qty;
  };

  function calculateCartFullAmount(){
      if($rootScope.cart.orders.length>0){
          $rootScope.cart.totalAmount = 0;
          for(var i=0;i< $rootScope.cart.orders.length;i++){
            $rootScope.cart.totalAmount += $rootScope.cart.orders[i].selectedSize.finalPrice * $rootScope.cart.orders[i].selectedSize.qty;
          }
      }
  };

  $scope.continueToDelivery = function () {
    processCartObject();
  };

  function processCartObject(){
    var orders = [];
    angular.forEach($scope.currentCart.orders,function(itemObj){
        orders.push(
          {
            "foodItemId": itemObj.itemId,
            "quantity": itemObj.selectedSize.qty,
            "sizeId": itemObj.selectedSize.sizeId
          }
        );
    });
    $scope.currentCart.orders = orders;
    delete $scope.currentCart.organizationName;
    localStorage.setItem('CHECKOUT_CART',JSON.stringify($scope.currentCart));
    $state.go('delivery_member');
  }

  $scope.logIn = function () {
    $state.go('delivery_member');
  };

  $scope.guestDelivery = function () {
    $state.go('delivery_guest');
  };

});

t2b_mobile.controller('confirmOrderController', function ($scope,$state,$translate,$rootScope,$stateParams) {

  if($stateParams.bookingCart!=null){
    $scope.confirmedCart = JSON.parse($stateParams.bookingCart);
  }else{
    $state.go('restaurant');
  }
  console.log($scope.confirmedCart);

});

