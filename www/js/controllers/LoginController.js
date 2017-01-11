angular.module("TaggerMobile")
.controller('LoginCtrl',function($state, $scope, $ionicPopup, LoginService){
	$scope.user = {
		uname: "",
		passwd: ""
	}

	$scope.goToSignUp = function(){
		$state.go('signup')
	}

	$scope.login = function(){
		LoginService.loginUser($scope.user).then(function(response){
			if(LoginService.isLoggedIn()){
				$state.go('app.dash');
			}
			else{
				console.log("Invalid login");
				$ionicPopup.alert({
					title: 'Invalid Login',
					template: 'Please check your username and password'
				});
			}
		});
	}
	
});