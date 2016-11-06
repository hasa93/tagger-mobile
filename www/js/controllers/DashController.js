angular.module('TaggerMobile')
.controller('DashCtrl', function($scope, NfcService) {
  console.log("In Dash Controller");
  $scope.gonext = function(){
		$state.go('login')
	}
});
