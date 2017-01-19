var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('checkoutController', function ($scope,$state,$translate,$rootScope) {

  $scope.sizes = ['small','medium','large'];

  $scope.items = ['asda','asdas'];
  $scope.isMemberLogin = false;
  $scope.isEditSeen = false;

  $scope.cart = [
    {
      organizationId : 1,
      organizationName : 'Green Foods',
      items : [
        {
          itemId : 1,
          itemName : 'Chilly Chicken',
          imageUrl : 'img/food_items/1.jpeg',
          unitPrice : 100,
          qty : 2,
          category:'non-veg',
          selectedSize : 'small',
          sizes : ['small','large'],
          editEnabled:false
        },{
          itemId : 2,
          itemName : 'Chicken Burger',
          imageUrl : 'img/food_items/2.jpg',
          description : 'Prevent food spoilage from...',
          unitPrice : 50,
          qty : 3,
          category:'non-veg',
          selectedSize : 'medium',
          sizes : ['small','medium','large'],
          editEnabled:false
        },{
          itemId : 3,
          itemName : 'Potato Chips',
          imageUrl : 'img/food_items/3.jpg',
          description : 'Prevent food spoilage from...',
          unitPrice : 150,
          qty : 1,
          category:'veg',
          selectedSize : 'large',
          sizes : ['medium','large'],
          editEnabled:false
        }
      ],
    }
  ];
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
      item.qty++;
      calculateCartFullAmount();
  };

  $scope.sub = function (item) {
      item.qty>0 ? item.qty-- : '';
      calculateCartFullAmount();
  };

  function calculateCartFullAmount(){
    angular.forEach($scope.cart, function(obj) {
      obj.totalAmount = 0;
       for(var i=0;i< obj.items.length;i++){
         console.log(obj.items[i]);
         obj.totalAmount += obj.items[i].unitPrice * obj.items[i].qty;
       }
    });
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

