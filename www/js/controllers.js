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

})

.controller('profileCtrl', function($scope) {

})

.controller('popUpCtrl', function($scope) {

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
