angular.module('TaggerMobile')
.controller('DashCtrl', function($state,$scope, RetailService, NfcService,$ionicPopup, $timeout,$ionicSideMenuDelegate) {
      $scope.$on('$ionicView.enter', function(){
      $ionicSideMenuDelegate.canDragContent(false);
    });
  $scope.$on('$ionicView.leave', function(){
      $ionicSideMenuDelegate.canDragContent(true);
    });
  	$scope.recent = [];
    $scope.categories = {
        'Bathing+and+Skin+Car' : [],
        'Clothes' : [],
        'Furniture' : [],
        'Gifts' : [],
        'Strollers' : [],
        'Toy' : []
    };

    $scope.cartPopup = function(){
    $scope.data = {};
    var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.wifi" placeholder= "Rs:">',
    title: 'Enter Your Amount',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Add</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {

            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close();
  }, 60000);
 };

	$scope.refreshRecentList = function(){
      console.log($scope.categories);
      console.log(Object.keys($scope.categories));

      Object.keys($scope.categories).map(function(category){
        var catRep = category.replace(/\+/g, '%20');
        RetailService.getRecentProducts(catRep).then(function(result){
          $scope.categories[category] = result;
          console.log($scope.categories);
        }, function(err){
          console.log(err);
        });
      });
 	}

   $scope.viewDetails = function(item){
     $state.go('app.product', { details: item });
   }

   $scope.goToVouchers = function(){
      $state.go('app.vouchers');
   }

   $scope.$on('$ionicView.enter', function(){
      $scope.refreshRecentList();
   });
});
