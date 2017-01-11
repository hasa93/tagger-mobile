angular.module("TaggerMobile")
.controller('SignupCtrl',function($state, $scope, $ionicPopup, LoginService){

	$scope.user = { uname: '',
					passwd: '',
					repasswd: ''};

	var logInAfterSignUp = function(){
		LoginService.loginUser($scope.user).then(function(result){
			if(result.status === "SUCCESS"){
				$state.go('app.profile');
				console.log(LoginService.getUserProfile());
			}
			else{
				$state.go('signup');
			}
		}, function(err){
			$state.go('signup');
		});
	}

	$scope.goToLogin = function(){
		$state.go('login');
	}

	$scope.signup = function(){
		if($scope.user.passwd == "" || $scope.user.repasswd == "" || $scope.user.uname == ""){
			$ionicPopup.alert({
				title: "Blank Credentials",
				template: "Some of the fields are blank"
			});
			return;
		}
		else if($scope.user.passwd != $scope.user.repasswd){
			$ionicPopup.alert({
				title: "Password Mismatch",
				template: "Password re-type doesn't match"
			});
			return;
		}
		else{
			LoginService.signUpUser($scope.user).then(function(result){
				if(result.status === "SUCCESS"){
					logInAfterSignUp();
				}
				else{
					$state.go('signup');
				}
			}, function(error){
				$state.go('signup');
			});
		}
	}
})