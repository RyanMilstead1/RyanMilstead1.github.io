angular.module('mySite', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'home', 'about', 'contact']);

angular.module('mySite').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('mySite').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $rootScope.$on('$stateChangeSuccess',function(event, current, previous){
        $("html, body").animate({ scrollTop: 0 }, 0);
        return $rootScope.pageTitle = current.data.pageTitle;
    });

});

angular.module('mySite').controller('AppCtrl',function($scope){

    $scope.nav = [
        {route: "home", name: "Home"},
        {route: "about", name: "About"},
        {route: "contact", name: "Contact"},
    ];

    $scope.socialLinks = {
        facebook: "https://www.facebook.com/ryan.milstead.7",
        twitter: "https://twitter.com/ryanmilstead",
        email: "mailto:ryanmilstead1@gmail.com",
        linkedin: "https://www.linkedin.com/in/ryanmilstead",
    };
});
