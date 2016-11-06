angular.module("TaggerMobile")
.controller('ProfileCtrl', function($scope, $state) {
	$scope.skip = function(){
	    $state.go('edit-details')
    }

	$scope.next = function(){
		$state.go('edit-details')
	}
	
	
});