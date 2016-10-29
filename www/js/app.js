// Ionic Starter App

angular.module('TaggerMobile', ['ionic'])
.config(function($stateProvider,$urlRouterProvider, configProvider){

  configProvider.locals.baseApiUrl = "http://ec2-54-186-114-41.us-west-2.compute.amazonaws.com:3000/api";

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

  .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
  })

  .state('tab.dash',{
    url:'/dash',
    views:{
      'tab-dash': {
        templateUrl: 'templates/dashboard.html'
      }
    }        
  })

  $urlRouterProvider.otherwise('/login');
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
