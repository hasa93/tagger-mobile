angular.module("TaggerMobile")
.service('VoucherService',function ($http,$q,config) {
	var o = {};
	var baseApiUrl = config.local.baseApiUrl;

	o.getVoucherDetails =function(){
		var deferred = $q.defer();
		$http.get(baseApiUrl + '').then(function(response){
			deferred.resolve(response.data);
		},function(error){
			deferred.reject({status : 'ERROR',msg:error});
		});
		return deferred.promise;
	}
	return o;
});