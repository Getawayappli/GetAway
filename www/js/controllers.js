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

.controller('accueilCtrl', function($scope,$ionicPopover,$timeout) {
  $scope.test1='blabla'

  $scope.events = [
    {titre:'Sport',id:1,nbpers:5,avatar:'img/sMM12deZQcad6zASL6ky_image_profile.jpg'},
    {titre:'Culture ',id:2,nbpers:155,avatar:'img/icon1.png'},
    {titre:'Plein air',id:3,nbpers:3,avatar:'img/icon1.png'},
    {titre:'Restaurant',id:4,nbpers:4,avatar:'img/icon1.png'},
    {titre:'Musique',id:5,nbpers:2,avatar:'img/icon1.png'},
    {titre:'Cinéma',id:6,nbpers:1,avatar:'img/icon1.png'},
    {titre:'Soirée',id:7,nbpers:10,avatar:'img/icon1.png'},
    {titre:'Théâtre',id:8,nbpers:7,avatar:'img/icon1.png'},
    {titre:'Spectacle',id:9,nbpers:4,avatar:'img/icon1.png'},
  ];

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('profilCtrl', function($scope,Interet,$ionicPopover) {

  $scope.pers=
  {
    avatar:'img/paysage.jpg',
    nom:'Malgorn',
    prenom:'Mathieu',
    age:22,
    ville:'Brest',
    desc:'Ergo ego senator inimicus, si ita vultis, homini, amicus esse, sicut semper fui, rei publicae debeo. Quid? si ipsas inimicitias, depono rei publicae causa, quis me tandem iure reprehendet, praesertim cum ego omnium meorum consiliorum atque factorum exempla semper ex summorum hominum consiliis atque factis mihi censuerim petenda.'

  };

  $scope.event={
    avatar:'img/paysage.jpg',
    titre:'Cinéma',
    nbpers:10
  }

  $scope.items=Interet.item;


  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/reglage.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
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

.controller('creationeventCtrl', function($scope,Interet,$filter) {

  $scope.showcheckbox = false;
  $scope.data={
    'nbpers' : '5',
    'date' : new Date(),
    

};
$scope.data.date.setSeconds(0,000);
//$scope.data.date.setMilliseconds(0);

  $scope.showcheck = function(){
    if($scope.showcheckbox==true){
      $scope.showcheckbox=false;
    }else{
    $scope.showcheckbox=true;
  }
  };

  $scope.items=Interet.item;

})

.controller('ContactCtrl', function($scope) {

})

.controller('tchatCtrl', function($scope) {

})

.controller('parametre', function($scope,$ionicPopover) {


    // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('templates/reglage.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });


    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });

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
