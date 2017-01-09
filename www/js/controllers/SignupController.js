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
			return;
		}
		LoginService.user = $scope.user;
		$state.go('profile');

	}
})