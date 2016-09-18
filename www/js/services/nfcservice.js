angular.module('TaggerMobile')
.factory('nfcService', function($rootScope, $ionicPlatform){
	var o = {};

	$ionicPlatform.ready(function(){
		console.log("Standing by for NFC...");
		nfc.showSettings(function(devInfo){
			console.log(devInfo);
		}, function(err){
			console.log(err);
		})
	});

	return o;
})