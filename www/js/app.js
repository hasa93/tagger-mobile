// Ionic Starter App

angular.module('TaggerMobile', ['ionic'])
.config(function($stateProvider,$urlRouterProvider, $ionicConfigProvider, configProvider){

  configProvider.locals.baseUrl = "http://ec2-54-186-114-41.us-west-2.compute.amazonaws.com:3000/";

  $ionicConfigProvider.tabs.position('bottom');

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

  .state('search-view',{
    url:'/search-view',
    templateUrl:'templates/search-view.html',
    controller:'SearchCtrl',
    params: {
      details:{}
      authentication: true;
    }
  })

  .state('dash',{
    url:'/dash',
    templateUrl:'templates/dashboard.html',
    controller:'DashCtrl',
    params:{
      authentication: true;
    }
  })
  .state('profile', {
    url: '/profile',
    templateUrl:'templates/profile.html',
    controller:'ProfileCtrl',
    params:{
      authentication: true;
    }
  })

  $urlRouterProvider.otherwise('/login');
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
        console.log(JSON.stringify(event));
        console.log("Tag id: " + nfc.bytesToHexString(event.tag.id));

        $state.go('dash', { tag: event.tag });

      }, function(success){
        console.log("Listening for tags...");
      });

      nfc.addNdefListener(function(event){
        console.log(JSON.stringify(event));
        console.log("NDEF Id: " + nfc.bytesToHexString(event.tag.id));

        $state.go('dash', { tag: event.tag });

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