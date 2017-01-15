angular.module('TaggerMobile')
.provider('config', function(){
	this.locals = {};

	this.$get = function(){
		return this;
	}
})