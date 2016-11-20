angular.module("TaggerMobile")
.controller('SearchCtrl', function($scope, $state, $ionicHistory) {
	$scope.productDetails = $state.params.details;

	$scope.goBack = function(){
		console.log($ionicHistory.viewHistory());
	}
});