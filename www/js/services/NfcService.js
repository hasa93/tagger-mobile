angular.module('TaggerMobile')
.factory('NfcService', function($rootScope, $ionicPlatform){
	var o = {};

	$ionicPlatform.ready(function(){
		console.log("Standing by for NFC...");

		nfc.addTagDiscoveredListener(function(event){
			console.log(event);
		}, function(success){
			console.log("Listening for tags...");
		})

		nfc.showSettings(function(devInfo){
			console.log(JSON.stringify(devInfo));
		}, function(err){
			console.log(err);
		})
	});

	return o;
})