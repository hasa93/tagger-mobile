angular.module("TaggerMobile")
.service('LoginService', function($http, $q){
	var baseApiUrl = "http://localhost:3000";

	var o = {};

	o.loginUser = function(username, passwords){
		var deferred = $q.defer();

		$http.post(baseApiUrl + 'customer/login', {
			"uname": username,
			"passwd": passwd
		}).then(function(profile){
			deferred.resolve({ status: "SUCCESS", profile: profile });
		}).catch(function(error){
			deferred.reject({ status: "ERROR", msg: error });
		});

		return deferred.promise;
	}

	return o;
})