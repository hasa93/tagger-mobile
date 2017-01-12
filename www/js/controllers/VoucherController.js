angular.module("TaggerMobile")
.controller('VoucherCtrl', function($scope, $state, $ionicPopup, ionicToast, LoginService, RetailService) {
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

  var isValidNumber = function(number){
      return (number.length == 10 && isFinite(number));
  }

	$scope.$on('$ionicView.enter', function(){
		console.log("switch to voucherview");
		profile	= LoginService.getUserProfile();
		refreshVouchers();
		console.log(profile);
	})

  $scope.transferVoucher = function(voucher){
      $ionicPopup.prompt({
        title: "Transfer Voucher",
        inputType: "text",
        inputPlaceholder: "Receiver Mobile Number"
      }).then(function(res){
          if(isValidNumber(res)){
            console.log(voucher.vouch_id);
            var receipt = {
              voucherId: voucher.vouch_id,
              recvContact: res
            };

            RetailService.transferVoucher(receipt).then(function(result){
              ionicToast.show('Voucher shared successfully!', 'bottom', false, 2500);
              refreshVouchers();
            }, function(err){
                console.log("error");
                if(err.msg === "Receiver not found"){
                  ionicToast.show('Receiver not found!', 'bottom', false, 2500);
                }
            });
          }
          else{
            console.log("invalid");
            ionicToast.show('Invalid Mobile Number', 'bottom', false, 2500);
          }
      });
  }
});