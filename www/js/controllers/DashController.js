angular.module('TaggerMobile')
.controller('DashCtrl', function($scope, RetailService) {
  	console.log("In Dash Controller");

  	$scope.recent = [];

  	$scope.refreshRecentList = function(){
  		RetailService.getRecentProducts().then(function(result){
  			$scope.recent = result;
  			console.log(result);
  		}, function(err){
  			console.log(err);
  		});
  	}

  	$scope.refreshRecentList();

});
