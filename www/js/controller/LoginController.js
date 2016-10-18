angular.module('stater')
.controller('LoginCtrl', function($scope, $state){
	console.log("In login ctrl...");

	$scope.user = {uname: '', pass: ''};

	$scope.logIn = function(){
		console.log($scope.user.uname);
		console.log($scope.user.pass);

	}
});