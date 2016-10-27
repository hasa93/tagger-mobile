angular.module("TaggerMobile")
.controller('SignupCtrl',function($state,$scope){
	$scope.goToLogin = function(){
		$state.go('login');
	}
})