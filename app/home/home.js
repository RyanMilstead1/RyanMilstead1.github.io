angular.module('home', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('home').config(function($stateProvider) {

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "app/home/partial/home/home.html",
        data: {
          pageTitle: 'Home',
        }
      });

    /* Add New States Above */

});

