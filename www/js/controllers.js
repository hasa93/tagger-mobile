angular.module("starter")

.controller('AppCtrl',function() {
})

.controller('LoginCtrl',function($state,$scope,$ionicPopup,AuthService,$ionicHistory) {
	$scope.data={};

	$scope.login=function(data){
		AuthService.login(data.username,data.password).then(function(autheticated){
        $state.go('dashboard',{},{reload:true});
        $scope.setCurrentUsername(data.username);
		},function(err){
			var alertPopup=$ionicPopup.alert({
				title:'login failed',
				template:'please check your credentials'
			});
		});
	}

	$scope.signup=function(){
        $state.go('signup');
	}

	
  $scope.goBack = function() {
    $ionicHistory.goBack();
  };


})


.controller('SignupCtrl',function() {})
.controller('SearchCtrl',function() {})
.controller('DashboardCtrl',function($scope,$state,$ionicPopup,$http,AuthService) {
	$scope.logout=function(){
		AuthService.logout();
		$state.go('login');
		  console.log('Switching to logout');
	};


})

.controller('SideCtrl', function($scope, $ionicSideMenuDelegate) {
   $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
       console.log('Switching to sidebar');
   };


});