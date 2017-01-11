angular.module("TaggerMobile")
.controller('MainCtrl', function($scope, $state, LoginService) {
	console.log("In main controller...");

	$scope.logout = function(){
    	LoginService.logOut();
    	$state.go('login');
  	}

  	$scope.vouchers = function(){
    	LoginService.logOut();
    	$state.go('app.vouchers');
  	}

  	$scope.flagged = function(){
    	LoginService.logOut();
    	$state.go('app.flaglist');
  	}

  	$scope.profile = function(){
    	LoginService.logOut();
    	$state.go('app.profile');
  	}
});
