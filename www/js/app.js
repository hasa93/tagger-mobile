// Ionic Starter App

angular.module('TaggerMobile', ['ionic'])
.config(function($stateProvider,$urlRouterProvider, $ionicConfigProvider, $httpProvider, configProvider){

  configProvider.locals.baseUrl = "http://ec2-54-186-114-41.us-west-2.compute.amazonaws.com:3000/";

  $httpProvider.interceptors.push('InterceptorService');

  $stateProvider
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'LoginCtrl'
  })

  .state('signup',{
    url:'/signup',
    templateUrl:'templates/signup.html',
    controller:'SignupCtrl'
  })

  .state('voucher',{
    url:'/voucher',
    templateUrl:'templates/voucher.html',
    controller:'VoucherCtrl',
    params: {
      details:{},
      authentication: true
    }
  })

  .state('search-view',{
    url:'/search-view',
    templateUrl:'templates/search-view.html',
    controller:'SearchCtrl',
    params: {
      details:{},
      authentication: true
    }
  })

  .state('dash',{
    url:'/dash',
    templateUrl:'templates/dashboard.html',
    controller:'DashCtrl',
    params:{
      authentication: true
    }
  })
  .state('profile', {
    url: '/profile',
    templateUrl:'templates/profile.html',
    controller:'ProfileCtrl',
    params:{
      authentication: true
    }
  })

  $urlRouterProvider.otherwise('/voucher');
})
.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

      console.log("Standing by for NFC...");

      nfc.addTagDiscoveredListener(function(event){
        var tagUid = nfc.bytesToHexString(event.tag.id).toUpperCase();
        $rootScope.$broadcast('TAG-DETECTED', { uid: tagUid });

      }, function(success){
        console.log("Listening for tags...");
      });

      nfc.addNdefListener(function(event){
        var tagUid = nfc.bytesToHexString(event.tag.id).toUpperCase();
        $rootScope.$broadcast('TAG-DETECTED', { uid: tagUid });

      }, function(success){
        console.log("Listening for NDEF...");
      }, function(error){
        console.log("NDEF listener failure...");
        console.log(error);
      });
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})