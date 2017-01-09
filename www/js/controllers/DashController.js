angular.module('TaggerMobile')
.controller('DashCtrl', function($state,$scope, RetailService, NfcService,$ionicPopup, $timeout) {

  	$scope.recent = [];
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
  		RetailService.getRecentProducts().then(function(result){
  			$scope.recent = result;
  			console.log(result);
  		}, function(err){
  			console.log(err);
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
