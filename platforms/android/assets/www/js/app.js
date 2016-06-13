// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
<<<<<<< HEAD
angular.module('app', ['ionic','firebase','ionic-material','ngCordova','tabSlideBox','ion-google-place','ionic.closePopup', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])
=======
angular.module('app', ['ionic','ionic-material','angular-click-outside','tabSlideBox','ion-google-place','ionic.closePopup', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])
>>>>>>> 3414fea3fc5e54d42dcc1131d129b1ae4f8e6f16

.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  .filter('num',function(){
    return function(input){
      return parseInt(input, 10);
    }
  })

  .filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
})
.filter('numKeys', function() {
    return function(json) {
        var keys = Object.keys(json)
        return keys.length;
    }
})
