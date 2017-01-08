angular.module("TaggerMobile")
.controller('SearchCtrl', function($scope, $state, $ionicHistory, NfcService,RetailService,LoginService) {
	$scope.productDetails = $state.params.details;
	$scope.nfcService = NfcService;

	$scope.$watch('nfcService.getProduct()', function(product){
		console.log("New product details: " + JSON.stringify(product));
		if(product.id != undefined){
			$scope.productDetails = product;
		}
	});

  	$scope.flagProducts = function(){
  		console.log("flagging...");
  		$scope.user =LoginService.getUserProfile();
  		RetailService.flagProducts($scope.productDetails.id,$scope.user.id).then(function(result){
  			console.log(result);
  		});
  	};

	console.log($state.params);
});