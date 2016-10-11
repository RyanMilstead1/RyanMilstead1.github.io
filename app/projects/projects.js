angular.module('projects', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('projects').config(function($stateProvider) {

  $stateProvider
    .state('projects', {
      url: "/portfolio",
      templateUrl: "app/projects/partial/projects/projects.html",
      data: {
        pageTitle: 'Portfolio',
      }
    });

});
