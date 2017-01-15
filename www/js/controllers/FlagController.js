angular.module("TaggerMobile")
.controller('FlagCtrl', function($scope, $state,RetailService,LoginService) {
  console.log("switch to flagview");
  var profile;
  $scope.productlist = [];

	var refreshflagproducts = function(custId){
		RetailService.getflagProducts(custId).then(function(result){
			if(result.status != "ERROR"){
				$scope.productlist = result;
				console.log($scope.productlist);
			}
		});
	}

	$scope.viewFlagged = function(index){
		if(index != undefined){
			$state.go('app.product', { details: $scope.productlist[index] });
		}
	}

	$scope.$on('$ionicView.enter', function(){
		console.log("switch to flag list view function");
		profile	= LoginService.getUserProfile();
		refreshflagproducts(profile.id);
		console.log(profile);
	});
});