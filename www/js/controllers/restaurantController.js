var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('restaurantController', function ($scope,$state,$translate,$rootScope,$sce) {

  init();

  function init() {
    $scope.activeTab = 0;
    initCategoryTabs();
    initFoodItems('all');
  }

  function initCategoryTabs (){
    $scope.tabs = [
      {
        "categoryId":0,
        "text" : "all"
      },
      {
        "categoryId":1,
        "text" : "non-veg"
      },
      {
        "categoryId":2,
        "text" : "veg"
      },
      {
        "categoryId":3,
        "text" : "pizza"
      },
      {
        "categoryId":4,
        "text" : "burger"
      },
      {
        "categoryId":5,
        "text" : "sea-food"
      },
      {
        "categoryId":6,
        "text" : "breakfast"
      },
      {
        "categoryId":7,
        "text" : "lunch"
      },
      {
        "categoryId":8,
        "text" : "dinner"
      },
      {
        "categoryId":9,
        "text" : "natural"
      },
      {
        "categoryId":10,
        "text" : "organic"
      }
    ];
  }

  function initFoodItems(type){
     switch(type){
       case 'all':
         $scope.foodItems = [
           {
             itemId : 1,
             itemName : 'Chilly Chicken',
             imageUrl : 'img/food_items/1.jpeg',
             description : 'Prevent food spoilage from...',
             unitPrice : 100,
             qty : 0,
             category:'non-veg',
             sizes : ['small','large']
           },{
             itemId : 2,
             itemName : 'Chicken Burger',
             imageUrl : 'img/food_items/2.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 50,
             qty : 0,
             category:'non-veg',
             sizes : ['small','medium','large']
           },{
             itemId : 3,
             itemName : 'Potato Chips',
             imageUrl : 'img/food_items/3.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 150,
             qty : 0,
             category:'veg',
             sizes : ['medium','large']
           },{
             itemId : 4,
             itemName : 'BBQ Pizza',
             imageUrl : 'img/food_items/4.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 200,
             qty : 0,
             category:'pizza',
             sizes : ['small','medium','large']
           },{
             itemId : 5,
             itemName : 'Egg Bun',
             imageUrl : 'img/food_items/5.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 30,
             qty : 0,
             category:'breakfast',
             sizes : ['small']
           },{
             itemId : 6,
             itemName : 'Sea Food Burger',
             imageUrl : 'img/food_items/6.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 70,
             qty : 0,
             category:'sea-food',
             sizes : ['small','medium','large']
           }
         ];
         break;
       case 'non-veg':
         $scope.foodItems = [
           {
             itemId : 1,
             itemName : 'Chilly Chicken',
             imageUrl : 'img/food_items/1.jpeg',
             description : 'Prevent food spoilage from...',
             unitPrice : 100,
             qty : 0,
             category:'non-veg',
             sizes : ['small','large']
           },{
             itemId : 2,
             itemName : 'Chicken Burger',
             imageUrl : 'img/food_items/2.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 50,
             qty : 0,
             category:'non-veg',
             sizes : ['small','medium','large']
           }
         ];
         break;
       case 'veg':
         $scope.foodItems = [
           {
             itemId : 3,
             itemName : 'Potato Chips',
             imageUrl : 'img/food_items/3.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 150,
             qty : 0,
             category:'veg',
             sizes : ['medium','large']
           }
         ];
         break;
       case 'pizza':
         $scope.foodItems = [
           {
             itemId : 4,
             itemName : 'BBQ Pizza',
             imageUrl : 'img/food_items/4.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 200,
             qty : 0,
             category:'pizza',
             sizes : ['small','medium','large']
           }
         ];
         break;
       case 'burger':
         $scope.foodItems = [
           {
             itemId : 2,
             itemName : 'Chicken Burger',
             imageUrl : 'img/food_items/2.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 50,
             qty : 0,
             category:'non-veg',
             sizes : ['small','medium','large']
           }
         ];
         break;
       case 'sea-food':
         $scope.foodItems = [
           {
             itemId : 6,
             itemName : 'Sea Food Burger',
             imageUrl : 'img/food_items/6.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 70,
             qty : 0,
             category:'sea-food',
             sizes : ['small','medium','large']
           }
         ];
         break;
       case 'breakfast':
         $scope.foodItems = [
           {
             itemId : 5,
             itemName : 'Egg Bun',
             imageUrl : 'img/food_items/5.jpg',
             description : 'Prevent food spoilage from...',
             unitPrice : 30,
             qty : 0,
             category:'breakfast',
             sizes : ['small']
           }
         ];
         break;
       default :
         $scope.foodItems = [];
         break;
     }
  };

  $scope.subQty = function (item) {
    if(item.qty>0){
      item.qty--;
    }
  };

  $scope.addQty = function (item) {
    item.qty++;
  };

  $scope.sizes = ['small','medium','large'];

  var originatorEv;

  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
  $scope.checkout = function () {
    $state.go('checkout');
  };
  $scope.onSlideMove = function(data){
    $scope.activeTab = data.index;
    switch(data.index){
      case 0:
        initFoodItems('all');
        break;
      case 1:
        initFoodItems('non-veg');
        break;
      case 2:
        initFoodItems('veg');
        break;
      case 3:
        initFoodItems('pizza');
        break;
      case 4:
        initFoodItems('burger');
        break;
      case 5:
        initFoodItems('sea-food');
        break;
     case 5:
        initFoodItems('breakfast');
        break;
      default :
        initFoodItems('');
        break;
    }
  };

  $scope.isCartSeen = false;
  $scope.$on('floating-menu:open', function(){
    $scope.isCartSeen = true;
  });
  $scope.$on('floating-menu:close', function(){
    $scope.isCartSeen = false;
  });

});
