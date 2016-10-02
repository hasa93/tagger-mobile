angular.module('starter')

.service('AuthService',function($q,$http){
  var LOCAL_TOKEN_KEY='yourTokenKey';
  var username='';
  var isAuthenticated=false;
  var authToken;

  function localUserCredentials(){
    var token=window.localStorage.getItme(LOCAL_TOKEN_KEY);
    if(token){
      userCredentials(token);
    }
  };

  function storeUserCredentials(token){
    window.localStorage.setItme(LOCAL_TOKEN_KEY,token);
    userCredentials(token);
  };

  function userCredentials(token){
    username=token.split('.')[0];
    isAuthenticated=true;
    authToken=token;

  };
  function destroyUserCredentials(){
    authToken=undefined;
    username='';
    isAuthenticated=false;
    $http.defaults.headers.common['X-Auth-Token']=undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  };
  var login=function(name,pw){
    return $q(function(resolve,reject){
      if(name =='user' && pw == '1'){
        storeUserCredentials(name + '.yourServerToken ');
        resolve('Login success.');
      }else{
        reject('Login fail');
      }
    });
  };

  var logout=function(){
    destroyUserCredentials();
  };
  return{
    login:login,
    logout:logout,
    isAuthorized:function(){return isAuthorized;},
    isAuthenticated:function(){return isAuthenticated;},
    username:function(){return username;}
  };
});



