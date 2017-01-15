angular.module("TaggerMobile")
.controller('LoginCtrl',function($state, $scope, $ionicPopup, LoginService, RetailService, ionicToast){
	$scope.user = {
		uname: "",
		passwd: ""
	}

	$scope.goToSignUp = function(){
		$state.go('signup')
	}

	$scope.login = function(){
		console.log("Logging In...");
		LoginService.loginUser($scope.user).then(function(response){
			if(LoginService.isLoggedIn()){
				RetailService.init();
				$state.go('app.dash');
			}
		}, function(err){
			console.log("Failed login");
			ionicToast.show('Invalid Login!', 'bottom', false, 2500);
		});
	}

});