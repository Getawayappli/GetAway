angular.module('app.services', [])


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

.service('BlankService', [function(){

}]);
