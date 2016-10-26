angular.module("starter")
.controller('LoginCtrl',function($state,$scope, LoginService) {
	$scope.login = function(){
	    if($scope.myForm.$valid){
	    	$state.go('dashboard');
	    	console.log("sending request to server");
		    console.log($scope.username + " " + $scope.password);
	    }
		
	}
	$scope.signup=function(){
        $state.go('signup');
	}
	$scope.forget=function(){
		$state.go('forgetpsswrd');
	}
});