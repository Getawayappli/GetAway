angular.module('app.controllers', [])


.controller('loginCtrl', function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="text" placeholder="Identifiant/Mail">'
     			+ '</br>'
     			+'<input type="password" placeholder="Mot de passe " ng-model="data.wifi">'
     			+'<a href="#">Pas de compte? Inscrivez-Vous </a> ',
     title: 'Connexion',
     subTitle: 'veuillez entrer vos informations pour se connecter',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Login</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
     // myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
  
})

.controller('inscriptionCtrl', function($scope) {

})

.controller('accueilCtrl', function($scope) {

  $scope.events = [
    {titre:'Sport',id:1,nbpers:5},
    {titre:'Culture ',id:2,nbpers:155},
    {titre:'Plein air',id:3,nbpers:3},
    {titre:'Restaurant',id:4,nbpers:4},
    {titre:'Musique',id:5,nbpers:2},
    {titre:'Cinéma',id:6,nbpers:1},
    {titre:'Soirée',id:7,nbpers:10},
    {titre:'Théâtre',id:8,nbpers:7},
    {titre:'Spectacle',id:9,nbpers:4},
  ];
})

.controller('profileCtrl', function($scope) {

})

.controller('popUpCtrl', function($scope) {

})

.controller('event1Ctrl', function($scope) {
$scope.showcheckbox = false;

  $scope.showcheck = function(){
    if($scope.showcheckbox==true){
      $scope.showcheckbox=false;
    }else{
    $scope.showcheckbox=true;
  }
  };

  $scope.events = [
    {titre:'Sport',id:1,nbpers:5},
    {titre:'Culture ',id:2,nbpers:155},
    {titre:'Plein air',id:3,nbpers:3},
    {titre:'Restaurant',id:4,nbpers:4},
    {titre:'Musique',id:5,nbpers:2},
    {titre:'Cinéma',id:6,nbpers:1},
    {titre:'Soirée',id:7,nbpers:10},
    {titre:'Théâtre',id:8,nbpers:7},
    {titre:'Spectacle',id:9,nbpers:4},
  ];

})

.controller('event2Ctrl', function($scope) {
 $scope.events = [
    {titre:'Sport',id:1,nbpers:5},
    {titre:'Culture ',id:2,nbpers:155},
    {titre:'Plein air',id:3,nbpers:3},
    {titre:'Restaurant',id:4,nbpers:4},
    {titre:'Musique',id:5,nbpers:2},
    {titre:'Cinéma',id:6,nbpers:1},
    {titre:'Soirée',id:7,nbpers:10},
    {titre:'Théâtre',id:8,nbpers:7},
    {titre:'Spectacle',id:9,nbpers:4},
  ];

})

.controller('popUpContactCtrl', function($scope) {

})

.controller('creationeventCtrl', function($scope) {

})

.controller('ContactCtrl', function($scope) {

})

.controller('tchatCtrl', function($scope) {

})

.controller('personaliserVotreProfilCtrl', function($scope) {

  $scope.showcheckbox = false;

  $scope.showcheck = function(){
    if($scope.showcheckbox==true){
      $scope.showcheckbox=false;
    }else{
    $scope.showcheckbox=true;
  }
  };

  $scope.items = [
    {name:'Sport',id:1},
    {name:'Culture',id:2},
    {name:'Plein air',id:3},
    {name:'Restaurant',id:4},
    {name:'Musique',id:5},
    {name:'Cinéma',id:6},
    {name:'Soirée',id:7},
    {name:'Théâtre',id:8},
    {name:'Spectacle',id:9},
  ];



})



.controller('AppCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.createContact = function(u) {
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
  };

})
