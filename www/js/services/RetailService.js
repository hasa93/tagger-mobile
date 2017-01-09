angular.module("TaggerMobile")
.service('RetailService', function($http, $q, config){
	var o = {};
	var baseUrl = config.locals.baseUrl;

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

	return o;
});