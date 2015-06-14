angular.module('about', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('about').config(function($stateProvider) {

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'app/about/partial/about/about.html',
        data: {
          pageTitle: 'About',
        }
    });
    /* Add New States Above */

});

