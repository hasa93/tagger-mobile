angular.module('TaggerMobile')
.controller('DashCtrl', function($state,$scope, RetailService) {
  	console.log("In Dash Controller");

  	$scope.recent = [];

    $scope.gotoSearchView = function(){
      $state.go('search-view');
      console.log("Switching to search view")
    }

  	$scope.refreshRecentList = function(){
  		RetailService.getRecentProducts().then(function(result){
  			$scope.recent = result;
  			console.log(result);
  		}, function(err){
  			console.log(err);
  		});
  	}

    $scope.viewDetails = function(item){
      $state.go('search-view', { details: item });
    }

  	$scope.refreshRecentList();

});
