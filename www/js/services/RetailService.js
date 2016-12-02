angular.module("TaggerMobile")
.service('RetailService', function($http, $q, config){
	var o = {};
	var baseUrl = config.locals.baseUrl;

	var getImageUrls = function(images){
		images.map(function(elem){
			elem.image = baseUrl + elem.image;
		});
	}

	o.getRecentProducts = function(){
		var deferred = $q.defer();

		$http.get(baseUrl + 'api/product/new/arrivals/10').then(function(response){
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

	return o;
});