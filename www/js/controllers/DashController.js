angular.module('TaggerMobile')
.controller('DashCtrl', function($state,$scope, RetailService, NfcService) {

  	$scope.recent = [];

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
