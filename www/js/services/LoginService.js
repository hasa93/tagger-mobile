angular.module("TaggerMobile")
.service('LoginService', function($http, $q, config){
	var baseApiUrl = config.locals.baseUrl;

	var profile = {};
	var isLoggedIn = false;
	var o = {};

	o.user = {};

	o.loginUser = function(){
		var deferred = $q.defer();

		$http.post(baseApiUrl + 'api/login/customer', o.user).then(function(response){
			if(response.data.status === 'OK'){
				profile = response.data.profile;
				isLoggedIn = true;
				deferred.resolve({ status: "SUCCESS" });
				localStorage.setItem("token", response.data.token);
			}
			else{
				isLoggedIn = false;
				deferred.reject({ status: "ERROR", msg: "Invalid Login"});
				return;
			}
		}).catch(function(error){
			deferred.reject({ status: "ERROR", msg: error });
		});

		return deferred.promise;
	}

	o.signUpUser = function(){
		var deferred = $q.defer();

		$http.post(baseApiUrl + 'api/user/create/customer', o.user).then(function(response){
			if(response.data.status	=== "ERROR"){
				deferred.resolve({ status: "ERROR" });
			}
			else{
				deferred.resolve({ status: "SUCCESS" });
			}
		}, function(error){
			deferred.reject({ status: "ERROR" });
		});
		return deferred.promise;
	}

	o.getUserProfile = function(){
		return profile;
	}

	o.logOut = function(){
		localStorage.setItem("token", "");
		isLoggedIn = false;
	}

	o.isLoggedIn = function(){
		return isLoggedIn;
	}

	return o;
})