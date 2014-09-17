'use strict';

// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('gdgApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent' :{
          templateUrl: 'templates/about.html',
          controller: 'TracksCtrl'
        }
      }
    })
    .state('app.location', {
      url: '/location',
      views: {
        'menuContent' :{
          templateUrl: 'templates/location.html'
        }
      }
    })
    .state('app.trilhas', {
      url: '/trilhas',
      views: {
        'menuContent' :{
          templateUrl: 'templates/trilhas.html',
          controller: 'TracksCtrl'
        }
      }
    })

    .state('app.single', {
      url: '/trilhas/:trilhaId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/trilha.html',
          controller: 'TracksCtrl'
        }
      }
    })

    .state('app.talk', {
      url: '/trilhas/:trilhaId/:Id',
      views: {
        'menuContent' :{
          templateUrl: 'templates/talk.html',
          controller: 'TracksCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/trilhas');
});
