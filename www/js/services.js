angular.module('app.services', ['firebase'])

//Factory pour les centres d'interet
.factory('Interet',[function(){
  return {
    item:[
      {name:'Sport',id:1,icon:'ion-trophy'},
      {name:'Culture',id:2,icon:'ion-android-color-palette'},
      {name:'Plein air',id:3,icon:'ion-leaf'},
      {name:'Restaurant',id:4,icon:'ion-android-restaurant'},
      {name:'Musique',id:5,icon:'ion-music-note'},
      {name:'Cinéma',id:6,icon:'ion-film-marker'},
      {name:'Soirée',id:7,icon:'ion-beer'},
      {name:'Théâtre',id:8},
      {name:'Spectacle',id:9,icon:'ion-mic-b'},



    ]
  };
}])


.factory('BlankFactory', [function(){

}])


 // <!-- CONNEXION A LA DATABASE FIREBASE -->
  .factory("user", function($firebaseArray) {
  var DataRef =  new Firebase('https://test-e06ab.firebaseio.com/user'); 
  return $firebaseArray(DataRef);
})


  // ...
.factory('facebookService', function($q) {
    return {
        getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
})

  .factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase('https://test-e06ab.firebaseio.com/user');
  return $firebaseAuth(usersRef);
})


.service('BlankService', [function(){

}]);
