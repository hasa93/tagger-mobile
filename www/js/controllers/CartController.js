angular.module('TaggerMobile')
.controller('CartCtrl', function($state,$scope) {
  $scope.cartPopup = function(){
    $scope.data = {};
    $scope.amount=0;
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
          
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
    $scope.amount = res;
  });

  $timeout(function() {
     myPopup.close();
  }, 3000);
 };
  
});
