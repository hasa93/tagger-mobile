angular.module("TaggerMobile")
.service('RetailService', function($http, $q, config){
	var o = {};
	var baseApiUrl = config.locals.baseApiUrl;

	o.getRecentProducts = function(){
		var deferred = $q.defer();

		$http.get(baseApiUrl + '/product/new/arrivals/10').then(function(response){
			deferred.resolve(response.data);
		}, function	(error){
			deferred.reject({ status: 'ERROR', msg: error });
		});

		return deferred.promise;
	}

	return o;
});