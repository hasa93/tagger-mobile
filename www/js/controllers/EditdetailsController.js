angular.module("TaggerMobile")
.controller('EditCtrl', function($scope, $state) {
	console.log("switch to editview");
	$scope.skip = function(){
		$state.go('edit-details')
	}

	$scope.next = function(){
		$state.go('edit-details')
	}

});