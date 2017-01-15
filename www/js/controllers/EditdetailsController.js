angular.module("TaggerMobile")
.controller('EditCtrl', function($scope, $state, LoginService){
	$scope.profile = {
		fname: '{{profile.fname}}',
		lname: '{{profile.lname}}',
		contact: '{{profile.contact}}'
	};

	$scope.skip = function(){
	    $state.go('app.dash');
    }

	$scope.next = function(){
		LoginService.user.fname = $scope.profile.fname;
		LoginService.user.lname = $scope.profile.lname;
		LoginService.user.contact = $scope.profile.contact;

		LoginService.signUpUser().then(function(response){
			$state.go('app.dash');
			console.log(response);
		});
	}

	
});