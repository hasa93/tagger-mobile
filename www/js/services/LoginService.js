angular.module("TaggerMobile")
.service('LoginService', function($http, $q, config){
	var baseApiUrl = config.locals.baseApiUrl;

	var o = {};

	o.loginUser = function(user){
		var deferred = $q.defer();

		$http.post(baseApiUrl + '/login/customer', user).then(function(response){
			var userProfile = response.data.profile;
			deferred.resolve({ profile: userProfile });
			localStorage.setItem("token", response.data.token);
		}).catch(function(error){
			deferred.reject({ status: "ERROR", msg: error });
		});

		return deferred.promise;
	}

	o.signUpUser = function(user){
		var deferred = $q.defer();

		//$http.post(baseApiUrl + 'api/user/create/customer')
		return deferred.promise;
	}

	return o;
})