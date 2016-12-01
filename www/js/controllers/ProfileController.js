angular.module("TaggerMobile")
.controller('ProfileCtrl', function($scope, $state, LoginService){
	$scope.profile = {
		fname: '',
		lname: '',
		contact: ''
	};

	$scope.skip = function(){
	    $state.go('dash');
    }

	$scope.next = function(){
		LoginService.user.fname = $scope.profile.fname;
		LoginService.user.lname = $scope.profile.lname;
		LoginService.user.contact = $scope.profile.contact;

		LoginService.signUpUser().then(function(response){
			$state.go('dash');
			console.log(response);
		});
	}
});