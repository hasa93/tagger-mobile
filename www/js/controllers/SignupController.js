angular.module("TaggerMobile")
.controller('SignupCtrl',function($state, $rootScope, $scope, $ionicPopup){

	$scope.goToLogin = function(){
		$state.go('login');
	}

	$scope.signup = function(){
		$state.go('dashboard');
	}
})