angular.module("TaggerMobile")
.controller('LoginCtrl',function($state, $scope, $ionicPopup, LoginService,ionicToast){
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
				ionicToast.show('Loggged Successfully', 'bottom', false, 2500);
			}
			else{
				ionicToast.show('Flaging Product', 'middle', false, 2500);
				
			}
		});
	}
	
});