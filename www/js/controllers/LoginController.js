angular.module("starter")
.controller('LoginCtrl',function($state,$scope, LoginService) {
	$scope.submit = function(username){
		console.log("User found");
		console.log($scope.username + " " + $scope.password);
	}
	$scope.signup=function(){
        $state.go('signup');
	}
	$scope.forget=function(){
		$state.go('forgetpsswrd');
	}
});