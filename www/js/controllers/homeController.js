var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('homeController', function ($scope,$state,$mdBottomSheet,$translate,$rootScope) {

  $scope.restaurants = [];

  initRestaurants();

  function initRestaurants() {
    $scope.restaurants = [
      [
        {
          restaurantId:1,
          restaurantName : 'Green Apple',
          status : 'open',
          imageUrl : 'img/food_slider/1.jpg',
          description : 'L’artiste Feridun Akgüngö',
          rating : 4,
          shareUrl : 'http://touch2buydev.xyz/profileView/90'
        },
        {
          restaurantId:2,
          restaurantName : 'Royal Burgers',
          status : 'open',
          imageUrl : 'img/food_slider/2.jpg',
          description : 'L’artiste Feridun Akgüngö',
          rating : 3,
          shareUrl : 'http://touch2buydev.xyz/profileView/88'
        }
      ],
      [
        {
          restaurantId:3,
          restaurantName : 'Green Foods',
          status : 'open',
          imageUrl : 'img/food_slider/3.jpg',
          description : 'L’artiste Feridun Akgüngö',
          rating : 4,
          shareUrl : 'http://touch2buydev.xyz/profileView/35'
        },
        {
          restaurantId:4,
          restaurantName : 'Yaal Rest',
          status : 'close',
          imageUrl : 'img/food_slider/4.jpg',
          description : 'L’artiste Feridun Akgüngö',
          rating : 2,
          shareUrl : 'http://touch2buydev.xyz/profileView/90'
        }
      ]
    ];
  };

  // $scope.slideHasChanged = function($index){
  //   console.log($index);
  // };

  $scope.goToRestaurant = function () {
    $state.go('restaurant');
  };

  $scope.showListBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'templates/bottomSheetList.html',
      controller: 'ListBottomSheetCtrl'
    }).then(function(clickedItem) {
      $scope.alert = clickedItem['name'] + ' clicked!';
    });
  };

  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  $scope.getNumber = function(num) {
    return new Array(num);
  }
});

t2b_mobile.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

  $scope.items = [
    { name: 'Share', icon: 'share-arrow' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
