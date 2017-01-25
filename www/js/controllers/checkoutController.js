var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('checkoutController', function ($scope,$state,$translate,$rootScope) {

  $scope.isMemberLogin = false;
  $scope.isEditSeen = false;

  $scope.cart = [
    $rootScope.cart
  ];

  if($rootScope.cart==undefined){
    $state.go('restaurant');
  }

  initLoginStatus();
  calculateCartFullAmount();

  function initLoginStatus(){
    if(localStorage.getItem('loginStatus')!=null){
      $scope.loginStatus = localStorage.getItem('loginStatus') && localStorage.getItem('loginStatus') != 'undefined' ? true : false;
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
            obj.totalAmount += obj.items[i].selectedSize.finalPrice * obj.items[i].selectedSize.qty;
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

