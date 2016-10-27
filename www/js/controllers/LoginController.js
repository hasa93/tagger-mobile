angular.module("TaggerMobile")
.controller('LoginCtrl',function($state, $scope, LoginService){
	$scope.goToSignUp = function(){
		$state.go('signup');
	}
});