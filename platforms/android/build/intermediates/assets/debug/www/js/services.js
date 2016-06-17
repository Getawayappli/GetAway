angular.module('app.services', [])

//Factory pour les centres d'interet
.factory('Interet',[function(){
  return {
    item:[
      {name:'Sport',id:1,icon:'ion-trophy',selected:false},
      {name:'Culture',id:2,icon:'ion-android-color-palette',selected:false},
      {name:'Plein air',id:3,icon:'ion-leaf',selected:false},
      {name:'Restaurant',id:4,icon:'ion-android-restaurant',selected:false},
      {name:'Musique',id:5,icon:'ion-music-note',selected:false},
      {name:'Cinéma',id:6,icon:'ion-film-marker',selected:false},
      {name:'Soirée',id:7,icon:'ion-beer',selected:false},
      {name:'Théâtre',id:8,selected:false},
      {name:'Spectacle',id:9,icon:'ion-mic-b',selected:false},
    ]
  };
}])

//Factory permettant de stocker l'id d'un événement
.factory('Event',function(){

    var event='';
    return  {
        getEvent: function () {
            return event;
        },
        setEvent: function (keyevent) {
            event = keyevent;
        }
    };
})

.factory("Items", function($firebaseArray) {
//  var itemsRef = new Firebase("https://blinding-fire-6945.firebaseio.com/event/chat");
//  return $firebaseArray(itemsRef);
return 0;
})

//Factory permettant la sauvegarde d'informations dans la mémoire du mobile
.factory ("StorageService", function($localStorage){

  $localStorage = $localStorage.$default({
    items:[]
  });

    var _getAll = function(){
      return $localStorage.items;
    };

    var _add = function(item){
      $localStorage.items.push(item);
    }
    var _remove = function (item){
      $localStorage.items.splice($localStorage.items.indexOf(item),1);
    }

    return {
      getAll: _getAll,
      add: _add,
      remove: _remove
    };
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
