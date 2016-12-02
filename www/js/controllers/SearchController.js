angular.module("TaggerMobile")
.controller('SearchCtrl', function($scope, $state, $ionicHistory, NfcService) {
	$scope.productDetails = $state.params.details;
	$scope.nfcService = NfcService;

	$scope.$watch('nfcService.getProduct()', function(product){
		console.log("New product details: " + JSON.stringify(product));
		$scope.productDetails = product;
	});

	$scope.goBack = function(){
		$state.params.details = {};
		$state.go('dash');
		console.log($ionicHistory.viewHistory());
	}
});