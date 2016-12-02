angular.module('TaggerMobile')
.factory('NfcService', function($state, $rootScope, $ionicPlatform, RetailService){
	var o = {};
	var product = {};

	$rootScope.$on('TAG-DETECTED', function(event, data){
		console.log("Tag heard...");
		var uid = data.uid;

		RetailService.getProductsByTag(uid).then(function(result){
			product = result[0];
			$state.go('search-view', { details: product });
		}, function(error){
			console.log("Error");
		});
	});

	o.getProduct = function(){
		return product;
	}

	return o;
})