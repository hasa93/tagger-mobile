angular.module('TaggerMobile')
.factory('InterceptorService', function(){
	return{
		request: function(config){
			var token = localStorage.getItem("token");

			if(!token || token == ""){
				return config;
			}

			config.headers['token'] = token;
			return config;
		}
	}
})