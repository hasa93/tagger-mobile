// Ionic Starter App

angular.module('TaggerMobile', ['ionic'])
.config(function($stateProvider,$urlRouterProvider){
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

  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'templates/dashboard.html',
    controller:'DashCtrl'
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
