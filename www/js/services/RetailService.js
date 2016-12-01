angular.module("TaggerMobile")
.service('RetailService', function($http, $q, config){
	var o = {};
	var baseUrl = config.locals.baseUrl;

	o.getRecentProducts = function(){
		var deferred = $q.defer();

		$http.get(baseUrl + 'api/product/new/arrivals/10').then(function(response){
			response.data.map(function(elem){
				elem.prodImage = baseUrl + elem.prodImage;
			});
			deferred.resolve(response.data);
		}, function	(error){
			deferred.reject({ status: 'ERROR', msg: error });
		});

		return deferred.promise;
	}

	return o;
});