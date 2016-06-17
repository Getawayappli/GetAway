// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','firebase','ionic-material','ngCordova','ngStorage','tabSlideBox','ion-google-place','ionic.closePopup', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

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

//Filte permettant de convertir une chaine de caractère en entier
  .filter('num',function(){
    return function(input){
      return parseInt(input, 10);
    }
  })

//Filtre permettant de filtrer des objets
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

//Filtre permettant de retourner le nombre d'object contenu dans un object
.filter('numKeys', function() {
    return function(json) {
        var keys = Object.keys(json)
        return keys.length;
    }
})
