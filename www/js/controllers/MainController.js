angular.module("TaggerMobile")
.controller('MainCtrl', function($scope, $state, LoginService) {
	console.log("In main controller...");

	$scope.logout = function(){
    LoginService.logOut();
    $state.go('login');
  }
});
