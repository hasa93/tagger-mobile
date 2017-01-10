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
      console.log($scope.user.number);
  		RetailService.flagProducts($scope.productDetails.id,$scope.user.id).then(function(result){
  			console.log(result);
  		});
  	};

	console.log($state.params);
	$scope.ratingArr = [{
    value: 1,
    icon: 'ion-ios-star-outline',
    question: 1
  }, {
    value: 2,
    icon: 'ion-ios-star-outline',
    question: 2
  }, {
    value: 3,
    icon: 'ion-ios-star-outline',
    question: 3
  }, {
    value: 4,
    icon: 'ion-ios-star-outline',
    question: 1
  }, {
    value: 5,
    icon: 'ion-ios-star-outline',
    question: 'question 5'
  }];

  $scope.setRating = function(question,val) {
    var rtgs = $scope.ratingArr;
    for (var i = 0; i < rtgs.length; i++) {
      if (i < val) {
        rtgs[i].icon = 'ion-ios-star';
      } else {
        rtgs[i].icon = 'ion-ios-star-outline';
      }
    };

  }
});