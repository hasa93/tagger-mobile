// Ionic Starter App

angular.module('TaggerMobile', ['ionic','ionic-toast'])
.run(function($ionicPlatform, $rootScope, $state, LoginService) {
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

  $rootScope.$on('$stateChangeSuccess', function(event, toState){
    console.log("State change...");
    console.log(LoginService.getUserProfile());

    if(toState.params){
      if(toState.params.authenticate && !LoginService.isLoggedIn()){
        $state.go('login');
      }
    }
  });
})
.config(function($stateProvider,$urlRouterProvider, $ionicConfigProvider, $httpProvider, configProvider){

  configProvider.locals.baseUrl = "http://ec2-54-186-114-41.us-west-2.compute.amazonaws.com:3000/";

  $httpProvider.interceptors.push('InterceptorService');
  $ionicConfigProvider.backButton.previousTitleText(false);

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

  .state('app',{
    url:'/app',
    abstract: true,
    templateUrl: 'templates/mainmenu.html',
    controller: 'MainCtrl',
    params: {
      authenticate: true
    }
  })

  .state('app.dash',{
    url:'/dash',
    views:{
      'menuContent':{
        templateUrl: 'templates/dashboard.html',
        controller: 'DashCtrl'
      }
    },
    params: {
      authenticate: true
    }
  })

  .state('app.vouchers',{
    url:'/vouchers',
    views:{
      'menuContent': {
        templateUrl:'templates/voucher.html',
        controller:'VoucherCtrl'
      }
    },
    params: {
      authenticate: true
    }
  })

.state('app.flaglist',{
    url:'/flaglist',
    views:{
      'menuContent':{
         templateUrl:'templates/flaglist.html',
         controller:'FlagCtrl'
      }
    },
    params: {
      authenticate: true
    }
})

.state('app.product',{
      url:'/product',
      views:{
        'menuContent':{
           templateUrl:'templates/productview.html',
           controller:'SearchCtrl'
        }
      },
      params: {
          details:{},
          authenticate: true
      }
    })

  .state('app.profile', {
    url: '/profile',
    views:{
      'menuContent':{
        templateUrl:'templates/profile.html',
        controller:'ProfileCtrl'
      }
    },
    params: {
      authenticate: true
    }
  })

  $urlRouterProvider.otherwise('/login');
})