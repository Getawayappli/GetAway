angular.module('app.controllers', [])


.controller('loginCtrl', function($scope) {

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
