angular.module("starter")
.controller('ProfileCtrl', function($scope, $state) {
	$scope.ion-compose=function(){
		$state.go('update');
	}
   console.log("switch");   
})