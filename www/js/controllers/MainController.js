angular.module("TaggerMobile")
.controller('MainCtrl', function($scope, $state, LoginService,$ionicSideMenuDelegate) {
	console.log("In main controller...");
        $scope.$on('$ionicView.enter', function(){
        console.log(LoginService.getUserProfile());
        $ionicSideMenuDelegate.canDragContent(false);
    });
  $scope.$on('$ionicView.leave', function(){
      $ionicSideMenuDelegate.canDragContent(true);
    });

  $scope.$watch(function() { return LoginService.getUserProfile() }, function(newVal){
    console.log("Scope is changing...");
    console.log(newVal);

    $scope.userName = newVal.fname + " " + newVal.lname;
    $scope.uname = newVal.uname;
  }, true);

	$scope.logout = function(){
    	LoginService.logOut();
    	$state.go('login');
  	}

  	$scope.vouchers = function(){
    	$state.go('app.vouchers');
  	}

  	$scope.flagged = function(){
    	$state.go('app.flaglist');
  	}

  	$scope.profile = function(){
    	$state.go('app.profile');
  	}
});
