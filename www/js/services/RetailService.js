angular.module("TaggerMobile")
.service('RetailService', function($http, $q, config, LoginService){
	var o = {};
	var baseUrl = config.locals.baseUrl;
	var id = LoginService.getUserProfile().id;

	var getImageUrls = function(images){
		images.map(function(elem){
			elem.image = baseUrl + elem.image;
		});
	}

	o.getRecentProducts = function(category){
		var deferred = $q.defer();

		$http.get(baseUrl + 'api/product/recent/'+ category +'/10').then(function(response){
			getImageUrls(response.data);
			deferred.resolve(response.data);
		}, function	(error){
			deferred.reject({ status: 'ERROR', msg: error });
		});

		return deferred.promise;
	}

	o.getProductsByTag = function(uid){
		var deferred = $q.defer();
		console.log("Requesting tag");
		console.log(uid);
		$http.get(baseUrl + 'api/product/find/uid/' + uid).then(function(response){
			getImageUrls(response.data);
			deferred.resolve(response.data);
		}, function(err){
			deferred.reject({ status: 'ERROR', msg: err });
		});

		return deferred.promise;
	}

	o.getCustomerVouchers = function(custContact){
		var deferred = $q.defer();
		$http.get(baseUrl + 'api/retail/find/voucher/cust/' + custContact).then(function(response){
			console.log(response.data);
			deferred.resolve(response.data);
		}, function(err){
			console.log(err);
			deferred.reject({ status: "ERROR" });
		});
		return deferred.promise;
	}

	o.flagProducts = function(prodId,custId){
		console.log("In flagging service");
		var deferred = $q.defer();
		$http.post(baseUrl + 'api/retail/flag/', { custId: custId, prodId: prodId }).then(function(response){
			console.log(response);
			deferred.resolve({status: "SUCCESS"});
		},function(err){
			deferred.reject({status: "ERROR",msg:err});
		});
		return deferred.promise;
	}

	o.getflagProducts = function(custId){
		console.log("Flagging service get flags");
		var deferred = $q.defer();
		$http.get(baseUrl + 'api/product/get/flagged/' + id).then(function(response){
			console.log(response.data);
			getImageUrls(response.data);
			deferred.resolve(response.data);
		},function(err){
			deferred.reject({stsus: "ERROR",msg:err});
		});
		return deferred.promise;
	}

	o.getCustomerPreferences = function(product){
		var deferred = $q.defer();
		$http.get(baseUrl + 'api/product/get/flagged/' + id).then(function(response){
			getImageUrls(response.data);
			deferred.resolve(response.data);
		},function(err){
			deferred.reject({status: "ERROR",msg:err});
		});
		return deferred.promise;
	}

	o.getFlaggedProducts = function(){
		var deferred = $q.defer();
		$http.post(baseUrl + 'api/product/get/prefs/' + id).then(function(response){
			getImageUrls(response.data);
			deferred.resolve(response.data);
		},function(err){
			deferred.reject({status: "ERROR",msg:err});
		});
		return deferred.promise;
	}

	o.transferVoucher = function(transferReceipt){
		var deferred = $q.defer();
		console.log("transferring voucher...");

		$http.post(baseUrl + 'api/retail/voucher/transfer', transferReceipt).then(function(response){
			var res = response.data;
			console.log(res);

			if(res.status === "ERROR" && res.msg === "Receiver not found"){
				deferred.reject({ status: "ERROR", msg: "Receiver not found" });
			}
			else{
				deferred.resolve(res);
			}
		},function(err){
			deferred.reject({status: "ERROR", msg:err});
		});
		return deferred.promise;
	}

	return o;
});