MySite.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'web/home.html',
            controller: 'indexController'
        })
        .state('qod', {
            url: '/quote',
            templateUrl: 'web/kural.html',
            controller: 'quoteController',
            resolve: {
                kurals: function (kuralService) {
                    var i = Math.floor(Math.random() * 1332);
                    console.log(i);
                    return kuralService.getKural().then(function (resp) {
                        //console.log(resp);
                        return resp.kurals[i];
                    });
                }
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: 'web/about.html',
            controller: 'aboutController'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: 'web/blog.html',
            controller: 'blogController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'web/contact.html',
            controller: 'contactController'
        })
        .state('sm', {
            url: '/brbsoon',
            templateUrl: 'sm.html',
            controller: 'smController'
        });
    $locationProvider.html5Mode(true);
}]);