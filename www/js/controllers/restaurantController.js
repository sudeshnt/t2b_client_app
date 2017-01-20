var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('restaurantController', function ($scope,$state,$translate,$rootScope,$sce) {
  $scope.restaurant = {};
  $rootScope.cart = {
    organizationId : 1,
    organizationName : 'Green Foods',
    items : [

    ]
  };
  init();

  function init() {
    $scope.activeTab = 0;
    initRestaurant();
    initFoodItems('all');
  }

  function initRestaurant (){
    $scope.restaurant = {
      organizationId : 1,
      organizationName : 'Green Foods',
      description : 'Pizza,Veg,Non-Veg',
      imageUrl : 'img/food_slider/1.jpg',
      organizationRating : 4,
      openTime : '10:00 am',
      closeTime : '11:00 pm',
      categories : [
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
      ]
    };
  }

  function initFoodItems(type){
     switch(type){
       case 'all':
         $scope.foodItems = [
           {
             itemId : 1,
             itemName : 'Chilly Chicken',
             imageUrl : 'img/food_items/1.jpeg',
             description : 'Prevent food spoilage...',
             category:'non-veg',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:100
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:150
               }
             ]
           },{
             itemId : 2,
             itemName : 'Chicken Burger',
             imageUrl : 'img/food_items/2.jpg',
             description : 'Prevent food spoilage...',
             category:'non-veg',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:50
               },
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:80
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:150
               }
             ]
           },{
             itemId : 3,
             itemName : 'Potato Chips',
             imageUrl : 'img/food_items/3.jpg',
             description : 'Prevent food spoilage...',
             category:'veg',
             sizes : [
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:150
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:250
               }
             ]
           },{
             itemId : 4,
             itemName : 'BBQ Pizza',
             imageUrl : 'img/food_items/4.jpg',
             description : 'Prevent food spoilage...',
             category:'pizza',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:200
               },
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:250
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:350
               }
             ]
           },{
             itemId : 5,
             itemName : 'Egg Bun',
             imageUrl : 'img/food_items/5.jpg',
             description : 'Prevent food spoilage...',
             category:'breakfast',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:30
               }
             ]
           },{
             itemId : 6,
             itemName : 'Sea Food Burger',
             imageUrl : 'img/food_items/6.jpg',
             description : 'Prevent food spoilage...',
             category:'sea-food',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:70
               },
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:100
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:150
               }
             ]
           }
         ];
         break;
       case 'non-veg':
         $scope.foodItems = [
           {
             itemId : 1,
             itemName : 'Chilly Chicken',
             imageUrl : 'img/food_items/1.jpeg',
             description : 'Prevent food spoilage...',
             category:'non-veg',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:100
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:150
               }
             ]
           },{
             itemId : 2,
             itemName : 'Chicken Burger',
             imageUrl : 'img/food_items/2.jpg',
             description : 'Prevent food spoilage...',
             category:'non-veg',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:50
               },
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:75
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:100
               }
             ]
           }
         ];
         break;
       case 'veg':
         $scope.foodItems = [
           {
             itemId : 3,
             itemName : 'Potato Chips',
             imageUrl : 'img/food_items/3.jpg',
             description : 'Prevent food spoilage...',
             category:'veg',
             sizes : [
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:150
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:175
               }
             ]
           }
         ];
         break;
       case 'pizza':
         $scope.foodItems = [
           {
             itemId : 4,
             itemName : 'BBQ Pizza',
             imageUrl : 'img/food_items/4.jpg',
             description : 'Prevent food spoilage...',
             category:'pizza',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:200
               },
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:225
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:275
               }
             ]
           }
         ];
         break;
       case 'burger':
         $scope.foodItems = [
           {
             itemId : 2,
             itemName : 'Chicken Burger',
             imageUrl : 'img/food_items/2.jpg',
             description : 'Prevent food spoilage...',
             category:'non-veg',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:50
               },
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:100
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:150
               }
             ]
           }
         ];
         break;
       case 'sea-food':
         $scope.foodItems = [
           {
             itemId : 6,
             itemName : 'Sea Food Burger',
             imageUrl : 'img/food_items/6.jpg',
             description : 'Prevent food spoilage...',
             category:'sea-food',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:70
               },
               {
                 sizeId:2,
                 text:'medium',
                 qty:0,
                 unitPrice:100
               },
               {
                 sizeId:3,
                 text:'large',
                 qty:0,
                 unitPrice:130
               }
             ]
           }
         ];
         break;
       case 'breakfast':
         $scope.foodItems = [
           {
             itemId : 5,
             itemName : 'Egg Bun',
             imageUrl : 'img/food_items/5.jpg',
             description : 'Prevent food spoilage...',
             category:'breakfast',
             sizes : [
               {
                 sizeId:1,
                 text:'small',
                 qty:0,
                 unitPrice:30
               }
             ]
           }
         ];
         break;
       default :
         $scope.foodItems = [];
         break;
     }
  }

  $scope.subQty = function (item) {
    if(item.selectedSize.qty>0){
      item.selectedSize.qty--;
      angular.forEach($rootScope.cart.items, function(obj) {
        if(obj.itemId == item.itemId && obj.selectedSize.sizeId == item.selectedSize.sizeId){
          obj.selectedSize.qty--;
        }
      });
      console.log($rootScope.cart);
    }
  };

  $scope.addQty = function (item) {
    item.selectedSize.qty++;
    if($rootScope.cart.items.length>0){
      var itemAvailable = false;
      angular.forEach($rootScope.cart.items, function(obj) {
        console.log(obj.itemId == item.itemId);
        console.log(obj.selectedSize.sizeId == item.selectedSize.sizeId);
        if(obj.itemId == item.itemId && obj.selectedSize.sizeId == item.selectedSize.sizeId){
          obj.selectedSize.qty++;
          itemAvailable = true;
        }
      });
      if(!itemAvailable){
        $rootScope.cart.items.push(angular.copy(item));
      }
    }else {
      $rootScope.cart.items.push(angular.copy(item));
    }
     console.log($rootScope.cart);
  };

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

  $scope.goToHome = function () {
    $state.go('home');
  };

  $scope.isCartSeen = false;
  $scope.$on('floating-menu:open', function(){
    $scope.isCartSeen = true;
  });
  $scope.$on('floating-menu:close', function(){
    $scope.isCartSeen = false;
  });

});
