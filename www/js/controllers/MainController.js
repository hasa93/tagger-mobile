angular.module("TaggerMobile")
.controller('MainCtrl', function($scope, $state) {
	console.log("In main controller...");

	$scope.logout = function(){
    var myPopup = $ionicPopup.show({
    template: '<input type="text">',
    title: 'Logout',
    subTitle: 'Confirm Logout',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>OK</b>',
        type: 'button-positive',
        onTap: function($scope,$state) {
          if (!$scope.) {
          	$state.go('mainmenu')
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  })

}
});
