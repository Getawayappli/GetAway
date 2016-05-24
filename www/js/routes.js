angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider




     .state('tabsEvent', {
      url: '/page0',
      templateUrl: 'templates/tabsEvent.html',
      abstract:true
    })

      .state('tabsEvent.event1', {
    url: '/event1',
    views: {
      'tab1': {
        templateUrl: 'templates/eventpage1.html',
        controller: 'event1Ctrl'
      }
    }
  })


      .state('tabsEvent.event2', {
    url: '/event2',
    views: {
      'tab2': {
        templateUrl: 'templates/eventpage2.html',
        controller: 'event2Ctrl'
      }
    }
  })




      .state('tabsController.accueil', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/accueil.html',
        controller: 'accueilCtrl'
      }
    }
  })

  .state('tabsController.aide', {
    url: '//page3',
    views: {
      'tab2': {
        templateUrl: 'templates/aide.html',
        controller: 'aideCtrl'
      }
    }
  })

  .state('tabsController.event', {
    url: '/event1',
    views: {
      'tab3': {
        templateUrl: 'templates/eventpage1.html',
        controller: 'event1Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.profil', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/profil.html',
        controller: 'profilCtrl'
      }
    }
  })



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

  .state('profil', {
    url: '/page5',
    templateUrl: 'templates/profil.html',
    controller: 'profilCtrl'
  })

  .state('popUp', {
    url: '/page6',
    templateUrl: 'templates/event.html',
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

  .state('parametre', {
    url: '/page13',
    templateUrl: 'templates/parametre.html',
    controller: 'parametre'
  })
  .state('filtre', {
    url: '/page14',
    templateUrl: 'templates/filtre.html',
    controller: 'filtre'
  })

$urlRouterProvider.otherwise('/page2')



});
