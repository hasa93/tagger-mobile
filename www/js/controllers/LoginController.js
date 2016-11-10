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
		LoginService.user = $scope.user;

		LoginService.loginUser().then(function(response){
			if(response.profile && response.profile.status == 'OK'){
				console.log($state);
				$state.go('tab.dash', { profile: response });
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