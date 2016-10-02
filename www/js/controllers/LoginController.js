angular.module("starter")
.controller('LoginCtrl',function($state,$scope) {
	$scope.signup=function(){
        $state.go('signup');
	}
});