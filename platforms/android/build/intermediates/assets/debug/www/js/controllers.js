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


.controller('MyCtrl', function($scope, $ionicPopup) {

   // When button is clicked, the popup will be shown...
   $scope.showPopup = function() {
      $scope.data = {}

      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Nom Prénom',
         subTitle: 'Description',
         scope: $scope,

         buttons: [
            { text: 'Voir le profil' }, {
               text: 'Contacter',
               type: 'button-positive',
                  onTap: function(e) {

                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });
   };

})
