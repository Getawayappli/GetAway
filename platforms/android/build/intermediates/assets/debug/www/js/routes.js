angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('inscription', {
    url: '/page3',
    templateUrl: 'templates/inscription.html',
    controller: 'inscriptionCtrl'
  })

  .state('accueil', {
    url: '/page4',
    templateUrl: 'templates/accueil.html',
    controller: 'accueilCtrl'
  })

  .state('profile', {
    url: '/page5',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('popUp', {
    url: '/page6',
    templateUrl: 'templates/popUp.html',
    controller: 'popUpCtrl'
  })

  .state('popUpContact', {
    url: '/page11',
    templateUrl: 'templates/popUpContact.html',
    controller: 'popUpContactCtrl'
  })

  .state('creationevent', {
    url: '/page7',
    templateUrl: 'templates/creationevent.html',
    controller:'creationeventCtrl'
  })

  .state('Contact', {
    url: '/page8',
    templateUrl: 'templates/Contact.html',
    controller: 'ContactCtrl'
  })

  .state('tchat', {
    url: '//page12',
    templateUrl: 'templates/tchat.html',
    controller: 'tchatCtrl'
  })

  .state('personaliserVotreProfil', {
    url: '/page9',
    templateUrl: 'templates/personaliserVotreProfil.html',
    controller: 'personaliserVotreProfilCtrl'
  })

$urlRouterProvider.otherwise('/page2')



});
