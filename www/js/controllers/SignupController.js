angular.module("TaggerMobile")
.controller('SignupCtrl',function($state, $scope, $ionicPopup, LoginService){

	$scope.user = { uname: '',
					passwd: '',
					repasswd: ''};

	$scope.goToLogin = function(){
		$state.go('login');
	}

	$scope.signup = function(){
		if($scope.user.passwd != $scope.user.repasswd){
			$ionicPopup.alert({
				title: "Password Mismatch",
				template: "Password re-type doesn't match"
			});
			return
		}

		LoginService.signUpUser($scope.user).then(function(response){
			console.log(response);
			$state.go('login');
		}, function(error){
			console.log(error);
		});
	}
})