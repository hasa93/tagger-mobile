angular.module("TaggerMobile")
.controller('ProfileCtrl', function($scope, $state, $ionicPopup, LoginService){
	$scope.shadowProfile = LoginService.getUserProfile();
	$scope.profile = LoginService.getUserProfile();

	$scope.update = function(){
		Object.keys($scope.profile).map(function(field){
			if(!$scope.shadowProfile[field] == null && $scope.profile[field] == null){
				$ionicPopup.alert({
					title: "Blank Fields",
					template: "Some blank fields previously filled were detected"
				});
				return;
			}
		});

		LoginService.updateUserProfile($scope.profile).then(function(result){
			if(result.status === "ERROR"){
				$ionicPopup.alert({
					title: "Update Failed",
					template: "Oops something went wrong..."
				});
				return;
			}
			$state.go('app.dash');
		}, function(err){
			$ionicPopup.alert({
				title: "Update Failed",
				template: "Oops something went wrong..."
			});
			return;
		})
	}
});