angular.module("TaggerMobile")
.controller('VoucherCtrl', function($scope, $state, LoginService, RetailService,$ionicPopup) {
	var profile;
	$scope.vouchers = [];

	var refreshVouchers = function(){
		RetailService.getCustomerVouchers(profile.contact).then(function(result){
			if(result.status != "ERROR"){
				var day_ms = 24 * 60 * 60 * 1000;
				var now = new Date();
				now = now.getTime();

				$scope.vouchers = result;

				$scope.vouchers.map(function(elem){
					var exp = new Date(elem.exp_date);
					elem.to_expire = Math.floor((exp.getTime() - now) / day_ms);
				})
			}
		});
	}
    $scope.voucherpopup = function(){
    $scope.data = {};
    var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.wifi" placeholder= "07XXXXXXXX">',
    title: 'Enter User Mobile Number',
    subTitle: '',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Share</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {

            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close();
  }, 60000);
 };
	$scope.$on('$ionicView.enter', function(){
		console.log("switch to voucherview");
		profile	= LoginService.getUserProfile();
		refreshVouchers();
		console.log(profile);
	})
});