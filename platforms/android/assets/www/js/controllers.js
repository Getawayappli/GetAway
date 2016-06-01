angular.module('app.controllers', [])

//Login
.controller('loginCtrl', function($scope, $ionicPopup, $timeout) {

  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.data = {}



    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" placeholder="Identifiant/Mail">'
      + '</br>'
      +'<input type="password" placeholder="Mot de passe " ng-model="data.wifi">'
      +'<a ui-sref="inscription"  ng-click="sendOrder()">Pas de compte? Inscrivez-Vous </a> ',
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

   $scope.sendOrder = function() {
    myPopup.close();
    };

    $timeout(function() {
      // myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };

})

//Inscription
.controller('inscriptionCtrl', function($scope) {

  $scope.date= new Date();
  $scope.date.setHours(0,0,0,0);
  $scope.placeholderdate=true;

    //Fonction qui permet d'afficher ou non le placeholder de la date
    $scope.showplacehold = function(date){
      console.log('show place');
      console.log(!date);
      if(!date){
        $scope.placeholderdate=true;
      }else{
        $scope.placeholderdate=false;
      }
    };


})

//Accueil
.controller('accueilCtrl', function($scope,$ionicPopover,$timeout,ionicMaterialMotion,ionicMaterialInk) {

  //Variable permettant de savoir sur quel onglets est actif
  $scope.active={
    'prox' : 'active',
    'amis' : '',
  }

//Fonction permettant de charger le contenu de l'onglets "à proximité"
$scope.activateprox = function(){
  if(!(angular.equals($scope.active.prox,'active'))){
    $scope.active={
      'prox':'active',
      'amis' : '',
    }
    $scope.events=$scope.events1;

  }
}
//Fonction permettant de charger le contenu de l'onglets "Mes amis"
$scope.activateamis = function(){
  if(!(angular.equals($scope.active.amis,'active'))){
    $scope.active={
      'prox':'',
      'amis' : 'active',
    }
    $scope.events=$scope.events2;

  }
}

  //Temporaire -> événement à proximité
  $scope.events1 = [
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

  //Temporaire -> événement de mes amis
    $scope.events2 = [
      {titre:'test',id:1,nbpers:5,avatar:'img/paysage.jpg'},
      {titre:'test ',id:2,nbpers:155,avatar:'img/icon1.png'},
      {titre:'test',id:3,nbpers:3,avatar:'img/icon1.png'},
      {titre:'Restaurant',id:4,nbpers:4,avatar:'img/icon1.png'},
      {titre:'Musique',id:5,nbpers:2,avatar:'img/icon1.png'},
      {titre:'Cinéma',id:6,nbpers:1,avatar:'img/icon1.png'},
      {titre:'Soirée',id:7,nbpers:10,avatar:'img/icon1.png'},
      {titre:'Théâtre',id:8,nbpers:7,avatar:'img/icon1.png'},
      {titre:'Spectacle',id:9,nbpers:4,avatar:'img/icon1.png'},
    ];

    $scope.events=$scope.events1;

    // Animation de la liste lors d'un événement
        $scope.$on('ngLastRepeat.mylist',function(e) {
            $timeout(function(){
                ionicMaterialMotion.blinds();
                ionicMaterialInk.displayEffect();
              },0); // No timeout delay necessary.
        });
      })

//Profil
.controller('profilCtrl', function($scope,Interet,$ionicPopover) {

//Temporaire -> profil de la personne
  $scope.pers=
  {
    avatar:'img/paysage.jpg',
    nom:'Malgorn',
    prenom:'Mathieu',
    age:22,
    ville:'Brest',
    desc:'Ergo ego senator inimicus, si ita vultis, homini, amicus esse, sicut semper fui, rei publicae debeo. Quid? si ipsas inimicitias, depono rei publicae causa, quis me tandem iure reprehendet, praesertim cum ego omnium meorum consiliorum atque factorum exempla semper ex summorum hominum consiliis atque factis mihi censuerim petenda.'

  };

//Temporaire dernier événement de la personne
  $scope.event={
    avatar:'img/paysage.jpg',
    titre:'Cinéma',
    nbpers:10,

  }

//Récupère la liste des interets
  $scope.items=Interet.item;
})

.controller('eventCtrl', function($scope,$filter) {
   $scope.pers=
  { avatar : 'img/image_profil_fille.jpg',
    nom:'Ari',
    prenom:'Khaoula',
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac enim et urna hendrerit lacinia. Phasellus hendrerit ac tortor sit amet vestibulum. Vestibulum at dignissim arcu, nec sodales nulla. Nullam accumsan massa vel mollis tristique. Cras nec purus vitae ligula vehicula vestibulum tempus quis lectus. Curabitur vel auctor ex.',
  }
   $scope.items = [
    { icon: 'ion-mic-c' },
    { icon: 'ion-pricetag'},
    { icon: 'ion-bag' },
  ];
  $scope.event= {
    date : new Date(),
    jour : 'lundi',
  }

$scope.jourus= $filter('date')($scope.event.date,'EEEE');

  switch ($scope.jourus) {
    case "Monday":
        $scope.event.jour='Lundi';
      break;
      case "Tuesday" :
        $scope.event.jour='Mardi';
        break;
        case "Wednesday" :
          $scope.event.jour='Mercredi';
          break;
          case "Thursday" :
          $scope.event.jour='Jeudi';
          break;
          case "Friday" :
          $scope.event.jour='Vendredi';
          break;
          case "Saturday" :
          $scope.event.jour='Samedi';
          break;
          case "Sunday" :
          $scope.event.jour='Dimanche';
          break;
    default:
      $scope.event.jour='Erreur';

  }

})

.controller('event1Ctrl', function($scope,$ionicPopover) {
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

.controller('event2Ctrl', function($scope,$ionicPopover) {
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

.controller('invitationCtrl', function($scope) {


  $scope.events = [
    {prenom:'Abel',id:1, avatar: 'img/image.jpg'},
    {prenom:'Fabien ',id:2,avatar: 'img/image_user.jpg'},
    {prenom:'Alice',id:3,avatar: 'img/icon1.png'},
    {prenom:'Amelie',id:4,avatar: 'img/image.jpg'},
    {prenom:'Noelle',id:5,avatar: 'img/image_user.jpg'},
    {prenom:'Oceane',id:6,avatar: 'img/image.jpg'},
    {prenom:'Pascal',id:7,avatar: 'img/image_user.jpg'},
    {prenom:'Marine',id:8,avatar: 'img/icon1.png'},
    {prenom:'Elodie',id:9,avatar: 'img/icon1.png'},
  ];


})

.controller('demandeCtrl', function($scope) {


  $scope.events = [
    {prenom:'Abel',id:1, avatar: 'img/image.jpg'},
    {prenom:'Fabien ',id:2,avatar: 'img/image_user.jpg'},
    {prenom:'Alice',id:3,avatar: 'img/icon1.png'},
    {prenom:'Amelie',id:4,avatar: 'img/image.jpg'},
    {prenom:'Noelle',id:5,avatar: 'img/image_user.jpg'},
    {prenom:'Oceane',id:6,avatar: 'img/image.jpg'},
    {prenom:'Pascal',id:7,avatar: 'img/image_user.jpg'},
    {prenom:'Marine',id:8,avatar: 'img/icon1.png'},
    {prenom:'Elodie',id:9,avatar: 'img/icon1.png'},
  ];


})

.controller('popUpContactCtrl', function($scope) {

})

//Création d'événement
.controller('creationeventCtrl', function($scope,Interet,$filter) {

  $scope.showcheckbox = false;
  //Initialisation des valeurs de date et nbpers
  $scope.data={
    'nbpers' : '5',
    'nbpersint' : 5,
    'date' : new Date(),
  };


  $scope.placeholderdate=false;
  $scope.data.date.setSeconds(0,000);

  $scope.mindate=$scope.data.date;
  //$scope.data.date.setMilliseconds(0);

//Fonction permettant d'afficher le contenu des centres d'interet
  $scope.showcheck = function(){
    console.log("Showcheck");
    if($scope.showcheckbox==true){
      $scope.showcheckbox=false;
    }else{
      $scope.showcheckbox=true;
    }
  };

  $scope.items=Interet.item;

//Fonction permettant d'afficher le placeholder de la date lorsqu'aucune n'est saisie
  $scope.showplacehold = function(date){
    console.log('show place');
    console.log(!date);
    if(!date){
      $scope.placeholderdate=true;
    }else{
      $scope.placeholderdate=false;
    }
  };

//Les deux fonctions permettent de convertir les Int en String pour permetre un affichage dans l'input et dans le range
    $scope.nbstring = function(){

        $scope.data.nbpersint=parseInt($scope.data.nbpers);
    };


      $scope.nbint = function(){

        $scope.data.nbpers=$scope.data.nbpersint;
      };

})

.controller('ContactCtrl', function($scope) {

})

.controller('tchatCtrl', function($scope, $timeout, $ionicScrollDelegate) {

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function() {
    alternate = !alternate;

    var d = new Date();
  d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      text: $scope.data.message,
      time: d
    });

    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


 // $scope.data = {};
   $scope.textos = [
    {text:'Salut',userId:1},
    {text:'test1 ',userId:2},
    {text:'Ca va ?',userId:3},
    {text:'Comment vas tu?',userId:4},
  ];
  $scope.myId = '12345';
  $scope.messages = [];

})

//Paramètre
.controller('parametreCtrl', function($scope,$ionicPopover) {
$scope.shownot = true;

//Fonction qui permets d'afficher la liste de type de notifications
$scope.shownotif = function(){
  if($scope.shownot==true){
    $scope.shownot=false;
  }else{
    $scope.shownot=true;
  }
};


})

//Filtre
.controller('filtre', function($scope,$ionicPopover,Interet) {

  //cacher la liste de type par défaut
  $scope.showcheckbox = false;
  $scope.showville = false;
  //chercher dans le servive les types
  $scope.items=Interet.item;

  //data récupère les informations saisies
  $scope.data={
    'dist' : '20',
    'distaff' : '20 km',
    'date' : new Date(),
  }

  //On enlève les heures/minutes de la date
  $scope.data.date.setHours(0,0,0,0);
  $scope.mindate=$scope.data.date

  //Fonction qui permet d'afficher la distance
  $scope.distmax = function(){
    if(angular.equals($scope.data.dist,'1000')){
      $scope.data.distaff='+ 1000 km';
    }else{
      $scope.data.distaff=$scope.data.dist + ' km';
    }
  };
  //Fonction qui permets d'afficher la liste de type
  $scope.showcheck = function(){
    if($scope.showcheckbox==true){
      $scope.showcheckbox=false;
    }else{
      $scope.showcheckbox=true;
    }
  };


  $scope.showv = function(){
    if($scope.showville==true){
      $scope.showville=false;
    }else{
      $scope.showville=true;
    }
  };


  //Fonction permettant d'afficher le placeholder de la date lorsqu'aucune n'est saisie
    $scope.showplacehold = function(date){
      console.log('show place');
      console.log(!date);
      if(!date){
        $scope.placeholderdate=true;
      }else{
        $scope.placeholderdate=false;
      }
    };

})

//Personnalisation du profil
.controller('personaliserVotreProfilCtrl', function($scope) {

  $scope.showcheckbox = false;

//Fonction permettant d'afficher ou non les centres d'interet
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

//Affichage popup
.controller('regCtrl', function($scope,$ionicPopover) {

  //Méthode permettant d'afficher les pop-ups de réglages

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

//Bouton précedent
.controller('goback',function($scope,$ionicHistory){
  $scope.goback = function(){
    $ionicHistory.goBack();
    $ionicHistory.clearCache();
  };
})
