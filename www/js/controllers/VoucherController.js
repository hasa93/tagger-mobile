angular.module("TaggerMobile")
.controller('VoucherCtrl', function($scope, $state, LoginService, RetailService) {
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

	$scope.$on('$ionicView.enter', function(){
		console.log("switch to voucherview");
		profile	= LoginService.getUserProfile();
		refreshVouchers();
		console.log(profile);
	})
});