var t2b_mobile = angular.module('t2b_mobile');

t2b_mobile.controller('homeController', function ($scope,$state,$mdBottomSheet,$mdSidenav, $log,$sce,$translate,$rootScope) {

  $scope.restaurants = [];
  $scope.searchEnabled = false;
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

  $scope.toggleSearch = function () {
    $scope.searchEnabled = $scope.searchEnabled ? false : true;
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
  $scope.toggleRight = buildToggler('right');
  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }
  }
  $scope.close = function () {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('right').close()
      .then(function () {
        $log.debug("close RIGHT is done");
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
